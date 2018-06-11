sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/ibmJSONData/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.ibmJSONData.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			
			this.getRouter().initialize();
			
			var oModel = new sap.ui.model.json.JSONModel();
			
			// Load JSON in model
			oModel.loadData("josn/data.json");
			this.setModel(oModel);
			
			
		}
	});
});