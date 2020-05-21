//not currently used...
class Task {
  constructor(description, priority) {
    this.description = description;
    this.priority = priority;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
    `;
  }
}
