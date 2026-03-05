class DataForm {
    constructor(schema, data = null) {
        this.schema = schema;
        this.data = data; // null for new items, existing data for editing
    }
    render() {
        const form = document.createElement('form');
        form.className = 'data-form';
        this.schema.fields.forEach(field => {
            if (!field.readOnly) {
                const fieldGroup = this.createFieldInput(field);
                form.appendChild(fieldGroup);
            }
        });
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = this.data ? 'Update' : 'Create';
        form.appendChild(submitBtn);
        form.onsubmit = (e) => {
            e.preventDefault();
            this.handleSubmit(form);
        };
        return form;
    }
    createFieldInput(field) {
        const div = document.createElement('div');
        div.className = 'form-group';
        const label = document.createElement('label');
        label.textContent = field.label;
        if (field.required) label.textContent += ' *';
        div.appendChild(label);
        let input;
        switch (field.type) {
            case 'textarea':
                input = document.createElement('textarea');

                input.rows = field.rows || 5;
                break;
            case 'boolean':
                input = document.createElement('input');
                input.type = 'checkbox';
                break;
            default:
                input = document.createElement('input');
                input.type = field.type;
        }
        input.name = field.name;
        input.required = field.required;
        if (this.data && this.data[field.name]) {
            input.value = this.data[field.name];
        }
        div.appendChild(input);
        return div;
    }
    handleSubmit(form) {
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log('Form submitted:', data);
        // Later, this will call an API to save the data
    }
}
