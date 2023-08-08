class hzDrag {
    constructor(options = {}) {
      const defaults = {
        selector: ".hz-drag",
        dragSpeed: 2
      };
  
      this.options = Object.assign(defaults, options);
  
      this.element = document.querySelector(this.options.selector);
      this.isDown = false;
      this.startX;
      this.scrollLeft;
  
      this.init();
    }
  
    init() {
      if (!this.element) {
        throw new Error("No DOM elements matching selector");
      } else {
        this.element.addEventListener("pointerdown", this.handleMouseDown.bind(this));
        this.element.addEventListener("pointerleave", this.destroy.bind(this));
        this.element.addEventListener("pointerup", this.destroy.bind(this));
        this.element.addEventListener("pointermove", this.handleMouseMove.bind(this));
      }
    }
  
    handleMouseDown(e) {
      this.isDown = true;
      this.element.classList.add("active");
      this.startX = e.pageX - this.element.offsetLeft;
      this.scrollLeft = this.element.scrollLeft;
    }
  
    handleMouseMove(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.element.offsetLeft;
      const move = (x - this.startX) * 2; //scroll-fast
      this.element.scrollLeft = this.scrollLeft - move;
    }
    
    destroy() {
      this.isDown = false;
      this.element.classList.remove("active");
    }
  }
  
  new hzDrag({
    selector: '.dragelements__items'
  });
  