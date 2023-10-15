sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("mdc.tutorial.controller.Mountains", {
            onInit: function () {
                //Load JSON from a file
                let test1 = this.getOwnerComponent().getModel();
                this.getOwnerComponent().setModel(test1, "mountains");
            }
        });
    });