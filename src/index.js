export default class Accordion {
	/**
	 * Create a new Accordion instance
	 *
	 * @param  {Object} el DOM Element
	 *
	 * @return {Object}    Accordion instance
	 */
	constructor(el, options = {}) {
		this.settings = {
			headSelector: '[data-title]',
			bodySelector: '[data-content]',
			hiddenClass: 'is--hidden',
			activeClass: 'is--active',
			...options
		};
		this.el = el;
		this.head = this.el.querySelector(this.settings.headSelector);
		this.body = this.el.querySelector(this.settings.bodySelector);
		this.isOpen = false;
		this.height = 0;

		this.bind().close();

		return this;
	}

	/**
	 * Bind event listeners
	 *
	 * @return {Object}    Accordion instance
	 */
	bind() {
		this.head.addEventListener('click', this.toggle.bind(this));

		this.body.addEventListener('transitionend', () => {
			if (!this.isOpen) {
				this.el.classList.add(this.settings.hiddenClass);
			}
		});

		return this;
	}

	/**
	 * Set instance's height
	 *
	 * @param {Number} n
	 *
	 * @return {Object}    Accordion instance
	 */
	setHeight(n) {
		setTimeout(() => {
			this.body.style.maxHeight = `${n}px`;
		}, 1);

		return this;
	}

	/**
	 * Toggle state
	 *
	 * @return {Object}    Accordion instance
	 */
	toggle() {
		this.height = this.body.scrollHeight;

		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}

		return this;
	}

	/**
	 * Close the accordion
	 *
	 * @return {Object}    Accordion instance
	 */
	close() {
		this.isOpen = false;
		this.el.classList.remove(this.settings.activeClass);
		this.body.style.maxHeight = `${this.height}px`;
		this.setHeight(0);

		return this;
	}

	/**
	 * Open the accordion
	 *
	 * @return {Object}    Accordion instance
	 */
	open() {
		this.isOpen = true;
		this.el.classList.add(this.settings.activeClass);
		this.el.classList.remove(this.settings.hiddenClass);
		this.body.style.maxHeight = `${0}px`;
		this.setHeight(this.height);

		return this;
	}
}
