var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css } from 'lit';
import { customElement, property, queryAssignedElements, } from 'lit/decorators.js';
import './slide-button.js';
let SimpleCarousel = class SimpleCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.slideIndex = 0;
        this.navigateToNextSlide = () => {
            this.changeSlide(1);
        };
        this.navigateToPrevSlide = () => {
            this.changeSlide(-1);
        };
    }
    render() {
        return html `
      <slide-button @click=${this.navigateToPrevSlide}>Left</slide-button>
      <slot></slot>
      <slide-button @click=${this.navigateToNextSlide}>Right</slide-button>
    `;
    }
    firstUpdated() {
        this.navigateSlide();
    }
    updated() {
        this.navigateSlide();
    }
    navigateSlide() {
        for (let i = 0; i < this.slideElements.length; i++) {
            if (i === this.slideIndex) {
                showSlide(this.slideElements[i]);
            }
            else {
                hideSlide(this.slideElements[i]);
            }
        }
    }
    changeSlide(offset) {
        const slideCount = this.slideElements.length;
        this.slideIndex =
            (slideCount + ((this.slideIndex + offset) % slideCount)) % slideCount;
    }
};
SimpleCarousel.styles = css `
    ::slotted(.slide-hidden) {
      display: none;
    }
  `;
__decorate([
    property({ type: Number })
], SimpleCarousel.prototype, "slideIndex", void 0);
__decorate([
    queryAssignedElements()
], SimpleCarousel.prototype, "slideElements", void 0);
SimpleCarousel = __decorate([
    customElement('simple-carousel')
], SimpleCarousel);
export { SimpleCarousel };
function hideSlide(el) {
    el.classList.add('slide-hidden');
}
function showSlide(el) {
    el.classList.remove('slide-hidden');
}
//# sourceMappingURL=simple-carousel.js.map