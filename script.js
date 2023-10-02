// Modelo
const model = {
    data: '',
    setData: function(newData) {
      this.data = newData;
    }
  };
  
  // Controlador
  const controller = {
    init: function() {
      this.submitButton = document.getElementById('btnSubmit');
      this.submitButton.addEventListener('click', this.handleSubmit);
    },
    handleSubmit: function() {
      const inputText = prompt('Ingrese un texto:');
      model.setData(inputText);
      view.render();
    }
  };
  
  // Vista
  const view = {
    render: function() {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<p>Texto ingresado: ${model.data}</p>`;
    }
  };
  
  // Inicialización de la aplicación
  controller.init();