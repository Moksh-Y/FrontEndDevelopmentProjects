var prediction1 = '';
var prediction2 = '';

Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("Camera");
Webcam.attach('#Camera');

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}

console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-o09aK6-J/model.json', modelLoaded);

function modelLoaded() {
    console.log('model loaded');
}

function speak() {
    var symph = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction1;
    speak_data_2 = "The second prediction is" + prediction2;
    var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    symph.speak(utter_this);
}

function predict_img() {
    var image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);

        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name_2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        speak();

        if (result[0].label == "Peace") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if (result[0].label == "Noice") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (result[0].label == "Great") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }

        if (result[1].label == "Peace") {
            document.getElementById("update_emoji_2").innerHTML = "&#9996;";
        }
        if (result[1].label == "Noice") {
            document.getElementById("update_emoji_2").innerHTML = "&#128076;";
        }
        if (result[1].label == "Great") {
            document.getElementById("update_emoji_2").innerHTML = "&#128077;";
        }
    }
}