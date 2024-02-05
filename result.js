const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const userAnswer = document.getElementById('ans-submit');
const resultBtn = document.getElementById('result-btn');
const getRegistration = document.getElementById('registration');
const showResultContainer = document.getElementById('result');

const loadResult = async (roll) =>{
    const response = await fetch('https://nafismahamudshahin.github.io/rimt-cst-result-server/result.json');
    const data = await response.json();
    // console.log(data);
    const userData = data.find(d => d.roll === roll)
    displayResults(userData);
}


const displayResults = (data) => {
    // select parent container:
    const selectSemester = document.getElementById('semester-select');

    if (!data){
        showResultContainer.innerHTML=`<h3>Data Not found! Try again.</h3>`
        return;
    }
    const {name,roll,gender,semester,tecnnology,session,cgpa}=data;
    let selectSemesterValue = +selectSemester.value;
    let result ;
    let resultSemeter = semester[selectSemesterValue-1];
    
    if(selectSemesterValue === 1){
        result = cgpa.firstSemester;
    }
    else if(selectSemesterValue === 2){
        result = cgpa.secondSemester;
    }
    else if(selectSemesterValue === 3){
        result = cgpa.thirdSemester;
    }
    else if(selectSemesterValue === 4){
        result = cgpa.fourthSemester;
    }
    else if(selectSemesterValue === 5){
        result = cgpa.fifthSemester;
    }
    else if(selectSemesterValue === 6){
        result = cgpa.sixthSemester;
    }
    else if(selectSemesterValue === 7){
        result = cgpa.seventhSemester;
    }
    else if(selectSemesterValue === 8){ 
        result = cgpa.eighthSemester;
    }

    // if result === 0 then result in not published yet.
    if(result === 0){
        showResultContainer.innerHTML=`<h3>This Semester Result Not publish</h3>`
        return;
    }
    showResultContainer.innerHTML = `
    <div class="logo-section">
    <img class="logo" src="logotop.gif" alt="">
    <h4>Ministry of Education, Government of Bangladesh <br>
        Bangladesh Technical Education Board</h4>
</div>
    <div class ="table-container">
    <table>
    <thead>
        <tr>
            <th>Roll No:</th>
            <th>${roll}</th>
            <th>Registration No:</th>
            <th>${getRegistration.value?getRegistration.value:"[Not Enty]"}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name:</td>
            <td colspan="3">${name}</td>
        </tr>
        <tr>
            <td>Technology</td>
            <td colspan="3">${tecnnology}</td>
        </tr>
        <tr>
            <td>Semester</td>
            <td>${resultSemeter}</td>
            <td>Session</td>
            <td>${session}</td>
        </tr>
        
        <tr>
            <td>CGPA</td>
            <td>${result}</td>
            <td>Gender</td>
            <td>${gender}</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Institute Name</td>
            <td colspan="3">Rumdo Institute Of Modern Technology</td>
        </tr>
    </tfoot>
</table>
<button onclick="location.reload()" class='result-btn'>Search more</button>
    </div>
    `;
    // clear the input fields
    getRegistration.value='';
}
const searchResults = (data) =>{
    const userRollElement = document.getElementById('roll');
    const roll = +userRollElement.value;
    loadResult(roll);
    // clear the input fields
    userRollElement.value = '';
    rendomAnswers(); 
}

const rendomAnswers = () =>{
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);

    // if random number = 0 the then chenge the number values
    if(num1 === 0||num2 === 0){
        num1 = 5;
        if(num2 === 0){
            num2 = 5;
        }
    }
    const total = num1 + num2;
    firstNumber.innerText=num1;
    secondNumber.innerText=num2;
    userAnswer.addEventListener('input',function(e){
        if(total == e.target.value){
            document.getElementById('result-btn').disabled = false;
            resultBtn.style.fontWeight=800;
            resultBtn.style.color='green';
        }else{
            document.getElementById('result-btn').disabled = true;
            resultBtn.style.fontWeight=600;
            resultBtn.style.color='white';
        }
    })
    
    userAnswer.value='';
}
// trigger button on Enter:
userAnswer.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        searchResults();
    }
})
rendomAnswers(); // 