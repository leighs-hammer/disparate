import Portals, {generateStringSelector, getTargetNode, checkForDupes} from '../portals'
import CONSTANTS from '../constants'
const { PORTALS } = CONSTANTS

describe('Test portal functions', () => {
	// selector
	test('should generate a valid string selector', () => {
		const output = generateStringSelector(PORTALS.MINICART)
		expect(output).toBe('[data-react-portal="mini-cart"]')
	})
	describe('dom node slection and evaluation', () => {
		// Select dom node
		test('should select a dom node', () => {
			document.body.innerHTML = `<div data-react-portal="mini-cart"></div>`
			const output = getTargetNode(PORTALS.MINICART)
			expect(output).toBeDefined()
		})

		test('should fail gracefully', () => {
			const output = getTargetNode()
			expect(output).toBe(false)
		})

		test('Duplicates should be found', () => {
			document.body.innerHTML = `<div data-react-portal="mini-cart"></div>
			<div data-react-portal="mini-cart"></div>`
			global.console = {
				warn: jest.fn(),
				log: jest.fn(),
				error: jest.fn()
			}
			const output = checkForDupes(PORTALS.MINICART)
			expect(output).toBe(true)
			expect(global.console.error).toHaveBeenCalledWith('A duplicate portal node was found, the portal will only target the first node. you may wish to use MultiPortals Component when available')
		})
		test('duplicates should not be found', () => {
			document.body.innerHTML = `<div data-react-portal="mini-cart"></div>`		
			const output = checkForDupes(PORTALS.MINICART)
			expect(output).toBe(false)
		})
		test('duplicates test shoudl fail gracefully', () => {
			document.body.innerHTML = `<div data-react-portal="mini-cart"></div>`		
			const output = checkForDupes()
			expect(output).toBe(false)
		})
	})

})