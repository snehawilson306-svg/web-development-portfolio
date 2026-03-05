class DataCard {
    constructor(schema, data) {
        this.schema = schema;
        this.data = data;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'data-card';

        let html = '<div class="card-content">';

        this.schema.fields.forEach(field => {
            if (field.name !== 'id') {

                const value = this.data[field.name] ?? ''; // safer fallback

                html += `
          <div class="field">
            <label>${field.label}:</label>
            <span>${this.formatValue(value, field.type)}</span>
          </div>
        `;
            }
        });

        html += '</div>';
        html += this.renderActions();

        card.innerHTML = html;
        return card;
    }

    formatValue(value, type) {
        if (!value && type !== 'boolean') return '';

        if (type === 'date') {
            return value ? new Date(value).toLocaleDateString() : '';
        }

        if (type === 'boolean') {
            return value ? 'Yes' : 'No';
        }

        return value;
    }

    renderActions() {
        return `
      <div class="card-actions">
        <button type="button" onclick="editItem(${this.data.id})">Edit</button>
        <button type="button" onclick="deleteItem(${this.data.id})">Delete</button>
      </div>
    `;
    }
}
