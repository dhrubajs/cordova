var push;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // Custom Events
        document.getElementById("click-for-app").addEventListener('touchstart', this.onTouchStart, false);
        document.getElementById("search-key").addEventListener('keyup', this.findByName, false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //======Barcode starts
        /*cordova.plugins.barcodeScanner.scan(
          function (result) {
              alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
          },
          function (error) {
              alert("Scanning failed: " + error);
          },
          {
              "preferFrontCamera" : true, // iOS and Android
              "showFlipCameraButton" : true, // iOS and Android
              "prompt" : "Place a barcode inside the scan area", // supported on Android only
              "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
              "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
          }
        );*/
        //======Barcode ends

        //======Background task starts
        /*backgroundtask.start(function() {
            setInterval(function(){
                //alert("Hello, I am here");
            }, 1000);
        });*/
        //======Background task ends

        //======Mixpanel starts
        /*window.mixpanelanalytics.setUp("d2cf83e0f852eaf2eab1221bffa4ef1f");
        window.mixpanelanalytics.trackEvent('Device is Ready already!');*/
        //======Mixpanel ends

        //======Push notifications on device ready starts
        push = PushNotification.init({
            android: {
                senderID: "362087841156"
            },
            ios: {
                alert: "false",
                badge: true,
                sound: 'false'
            },
            windows: {}
        });

        push.on('registration', function(data) {
            console.log(data.registrationId);
        });
        //======Push notifications on device ready ends

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    onTouchStart: function() {
         //======Helper function Camera starts
         /*function setOptions(srcType) {
            var options = {
                // Some common settings are 20, 50, and 100
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                // In this app, dynamically set the picture source, Camera or photo gallery
                sourceType: srcType,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true  //Corrects Android orientation quirks
            }
            return options;
        }*/
        //======Helper function Camera ends

        switch(this.id) {
            case "click-for-app":
                this.style.display = "none";
                document.getElementById("app-wrapper").style.display = "block";

                var ref = cordova.InAppBrowser.open('https://www.google.co.in', '_blank', 'location=yes');
                //=====Camera code starts
                /*var srcType = Camera.PictureSourceType.CAMERA;
                var options = setOptions(srcType);

                navigator.camera.getPicture(function cameraSuccess(imageUri) {
                    console.log("Get picture!");
                }, function cameraError(error) {
                    console.debug("Unable to obtain picture: " + error, "app");
                }, options);*/
                //=====Camera code ends

                //=====Contacts start
                /*function onSuccess() {
                    alert("Addition Success");
                };

                function onError(contactError) {
                    alert("Error = " + contactError.code);
                };

                var myContact = navigator.contacts.create();
                myContact.displayName = "A Testing.User";
                myContact.name = "A Plumber";
                myContact.phoneNumbers = "8734563890";
                myContact.save(onSuccess,onError);
                console.log("myContact", myContact);*/
                //=====Contacts ends

                //======Contacts save example 2
                /*var myContact = navigator.contacts.create({"displayName": "Another Test User"});
                var phoneNumbers = [];

                phoneNumbers[0] = new ContactField('work', '768-555-1234', false);
                phoneNumbers[1] = new ContactField('mobile', '999-555-5432', true); // preferred number
                phoneNumbers[2] = new ContactField('home', '203-555-7890', false);

                myContact.phoneNumbers = phoneNumbers;
                myContact.save(onSuccess,onError);*/
                //======Contacts save example 2

                //=====Contacts find starts
                /*function onSuccess(contacts) {
                    //alert('Found ' + contacts.length + ' contacts.');
                    //console.log(contacts);
                };

                function onError(contactError) {
                    alert('onError!');
                };

                // find all contacts with 'Bob' in any name field
                var options      = new ContactFindOptions();
                options.filter   = "Test User";
                options.multiple = true;
                options.desiredFields = [navigator.contacts.fieldType.id];
                options.hasPhoneNumber = false;
                var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
                var findContact = navigator.contacts.find(fields, onSuccess, onError, options);*/

                //=====Contacts find ends

                //======Push notification register device id on click event
                /*push = PushNotification.init({
                    android: {
                        senderID: "362087841156"
                    },
                    ios: {
                        alert: "false",
                        badge: true,
                        sound: 'false'
                    },
                    windows: {}
                });
                push.on('registration', function(data) {
                    console.log(data.registrationId);

                });*/
                break;
            default:
                console.log("Default case");
        }
    },

    findByName: function() {
        switch(this.id) {
            case "search-key":
                var searchKey = this.value;
                //======Json data
                /*jQuery.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: "http://cordova.netai.net/dummyData.json",
                    success: function(data){
                        jQuery('.employee-list').empty();
                        jQuery.each(data, function(index, element) {
                            var fullName = element.firstName + " " + element.lastName;
                            if (fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1) {
                                $('.employee-list').append('<li class="table-view-cell media"><img class="media-object pull-left" src="./resources/pics/' + element.pic + '"><div class="media-body full-name">' + fullName + '</div></li>');
                            }
                        });
                    },
                    error: function(xhr, ajaxOptions, thrownError){
                        console.log("Error occured");
                    }
                });*/

                //======Jsonp data
                var url = './resources/dummyJson.json?callback=js';
                // var url = "http://cordova.netai.net/dummyJson.json?callback=js";
                jQuery.ajax({
                   type: 'GET',
                    url: url,
                    async: false,
                    jsonpCallback: 'jsonCallback',
                    contentType: "application/json",
                    crossDomain: true,
                    cache:false,
                    dataType: 'jsonp',
                    success: function(data) {
                       jQuery('.employee-list').empty();
                        jQuery.each(data, function(index, element) {
                            var fullName = element.firstName + " " + element.lastName;
                            if (fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1) {
                                $('.employee-list').append('<li class="table-view-cell media"><img class="media-object pull-left" src="./resources/pics/' + element.pic + '"><div class="media-body full-name">' + fullName + '</div></li>');
                            }
                        });
                    },
                    error: function(e) {
                       console.log(e.message);
                    }
                });
                break;
            default:
                console.log("Default case");
        }
    }
};

app.initialize();
