import './accordion.css';

export type AccordionOptions = {
	headSelector: string;
	bodySelector: string;
	hiddenClass: string;
	activeClass: string;
};

export class Accordion {
	private el: HTMLElement | null;
	private head: HTMLElement | null;
	private body: HTMLElement | null;

	private height = 0;
	private isOpen = false;

	private settings: AccordionOptions;
	private defaultSettings: AccordionOptions = {
		headSelector: '[data-title]',
		bodySelector: '[data-content]',
		hiddenClass: 'is--hidden',
		activeClass: 'is--active'
	};

	constructor(el: HTMLElement | null, options: Partial<AccordionOptions> = {}) {
		this.settings = {
			...this.defaultSettings,
			...options
		};
		this.el = el;
		this.head = this.el?.querySelector(this.settings.headSelector) || null;
		this.body = this.el?.querySelector(this.settings.bodySelector) || null;

		this.bind().close();

		return this;
	}

	private bind(): Accordion {
		if (this.head) {
			this.head.addEventListener('click', this.toggle.bind(this));
		}

		if (this.body) {
			this.body.addEventListener('transitionend', () => {
				if (!this.isOpen && this.el) {
					this.el.classList.add(this.settings.hiddenClass);
				}
			});
		}

		return this;
	}

	private setHeight(n: number): Accordion {
		setTimeout(() => {
			if (this.body) {
				this.body.style.maxHeight = `${n}px`;
			}
		}, 1);

		return this;
	}

	public toggle(): Accordion {
		this.height = this.body?.scrollHeight || 0;

		this.isOpen ? this.close() : this.open();

		return this;
	}

	public close(): Accordion {
		this.isOpen = false;

		if (this.el) {
			this.el.classList.remove(this.settings.activeClass);
		}

		if (this.body) {
			this.body.style.maxHeight = `${this.height}px`;
		}

		this.setHeight(0);

		return this;
	}

	public open(): Accordion {
		this.isOpen = true;

		if (this.el) {
			this.el.classList.add(this.settings.activeClass);
			this.el.classList.remove(this.settings.hiddenClass);
		}

		if (this.body) {
			this.body.style.maxHeight = `${0}px`;
		}

		this.setHeight(this.height);

		return this;
	}
}

export default Accordion;
