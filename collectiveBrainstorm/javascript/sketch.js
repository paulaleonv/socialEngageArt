let newIssueInput;
let sendNewIssueButton;
let nextPageButtom;
let newIssuesTogether = [];
let usersIssues = [];
let originalFile=[];
//let issues.json

function preload() {
  //load jsonfile
}

function setup() {
  noCanvas();
  json = {}; // new JSON Object
//transform html in js.
  newIssueInput=select('#IssuesInput');
  sendNewIssueButton =select('#sendIssue');

  nextPageButtom=select('#page1button');

  sendNewIssueButton.mousePressed(saveIssues);
  extPageButtom.mousePressed(goToPage2);

}

function saveIssues() {
  console.log(newIssueInput.value());
  let newUserInput = newIssueInput.value();
  //document.getElementById('writeInput').value = "I dream d in a dream I saw a city invincible to the attacks of the
  //whole of the rest of the earth.";
  console.log(newUserInput);

  originalFile.push(newUserInput);

  save(originalFile, "currentInput.txt");
}

function goToPage2() {
	document.getElementById("page-1").style.display = 'none';
  document.getElementById("page-2").style.display = 'block';
}
