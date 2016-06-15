cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-analytics-mixpanelanalytics/www/mixpanelanalytics.js",
        "id": "cordova-plugin-analytics-mixpanelanalytics.mixpanelanalytics",
        "clobbers": [
            "window.mixpanelanalytics"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/contacts.js",
        "id": "cordova-plugin-contacts.contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/Contact.js",
        "id": "cordova-plugin-contacts.Contact",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
        "id": "cordova-plugin-contacts.convertUtils"
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
        "id": "cordova-plugin-contacts.ContactAddress",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
        "id": "cordova-plugin-contacts.ContactError",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
        "id": "cordova-plugin-contacts.ContactField",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
        "id": "cordova-plugin-contacts.ContactFindOptions",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
        "id": "cordova-plugin-contacts.ContactName",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
        "id": "cordova-plugin-contacts.ContactOrganization",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
        "id": "cordova-plugin-contacts.ContactFieldType",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-task/www/backgroundtask.js",
        "id": "cordova-plugin-background-task.BackgroundTask",
        "clobbers": [
            "backgroundtask"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-analytics-mixpanelanalytics": "1.0.40",
    "com.newrelic.ios.cordova": "4.0.0",
    "cordova-plugin-dialogs": "1.2.1",
    "phonegap-plugin-push": "1.7.0",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-camera": "2.2.0",
    "cordova-plugin-contacts": "2.1.0",
    "cordova-plugin-background-task": "0.2.0",
    "phonegap-plugin-barcodescanner": "5.0.0"
};
// BOTTOM OF METADATA
});