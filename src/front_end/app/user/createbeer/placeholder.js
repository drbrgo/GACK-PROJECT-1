//function submitForm() {
//    let form = document.getElementById('myForm'); still unsure of form name
//    let formData = {};
//
//    // Loop through the form elements
//    for (let i = 0; i < form.elements.length; i++) {
//        let element = form.elements[i];
//
//        // Handles checkboxes separately
//        if (element.type === 'checkbox') {
//            if (!formData[element.name]) {
//                formData[element.name] = [];
//            }
//            if (element.checked) {
//                formData[element.name].push(element.value);
//            }
//        } else if (element.type !== 'button') { // Ignore submit button
//            formData[element.name] = element.value;
//        }
//    }
//
//    // Convert the object to a JSON string
//    let jsonString = JSON.stringify(formData);
//
//    // Log or send the JSON string to the server
//    console.log(jsonString);
//    // sendToServer(jsonString); // Implement this function to send data to server
//}
//
//// Example function to send data to the server
//function sendToServer(data) {
//    // Implement AJAX request or other method to send data
//}


<script>
  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstartHandler);
  });
</script>

<p id="p1" draggable="true">This element is draggable.</p>
