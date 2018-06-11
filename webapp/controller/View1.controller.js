sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("com.ibmJSONData.controller.View1", {
		/**
		 *@memberOf com.ibmJSONData.controller.View1
		 */
		gotoPage2: function() {
			//This code was generated by the layout editor.
			this.getRouter().navTo("navView2");
		},
		
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
	});
});