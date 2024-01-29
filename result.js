
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

    const {name,roll,gender,semester,tecnnology,session,cgpa}=data;
    let selectSemesterValue = +selectSemester.value;
    let result ;
    let resultSemeter = semester[selectSemesterValue-1];
    if (!data){
        return;
    }
    
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
    const showResultContainer = document.getElementById('result');
    showResultContainer.innerHTML = `
    <div class="logo-section">
    <img class="logo" src="logotop.gif" alt="">
    <h4>Ministry of Education, Government of Bangladesh <br>
        Bangladesh Technical Education Board</h4>
</div>
<table>
    <thead>
        <tr>
            <th>Roll No:</th>
            <th>${roll}</th>
            <th>Registration No:</th>
            <th>15000000000</th>
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
    `;
}
// selectSemester.addEventListener('change', function () {
//     // Get the selected option value
//     const selectedValue = selectSemester.value;
//     selectedSemester(selectedValue);
// });

// const selectedSemester = (selectedValue) => {
//     console.log(selectedValue);
//     return selectedValue;
// }
const searchResults = (data) =>{
    const userRollElement = document.getElementById('roll');
    const roll = +userRollElement.value;
    loadResult(roll);
}