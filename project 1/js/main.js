const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const form = document.getElementById('form');
const empId = document.getElementById('empId');

const table = document.getElementById('table');

class Employee {

    constructor(id, name, email, mobile) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }


    showData() {
        const tr = document.createElement("tr");

        tr.innerHTML = `<tr>
                        <th scope="row">${this.id}</th>
                        <td>${this.name}</td>
                        <td>${this.email}</td>
                        <td>${this.mobile}</td>
                        <td>
                            <button class="btn btn-success edit" data-id="${this.id}">Edit</button>
                            <button class="btn btn-danger delete" data-id="${this.id}">Delete</button>
                        </td>
                        </tr>`;

        table.appendChild(tr);
    }

    store() {

        const data = JSON.parse(localStorage.getItem('employees')) ?? [];
        data.push({
            id: this.id,
            name: this.name,
            email: this.email,
            mobile: this.mobile
        });
        localStorage.setItem("employees", JSON.stringify(data));

        return this;

    }

    update(id) {
        const newItem = {
            id: id,
            name: this.name,
            email: this.email,
            mobile: this.mobile,
        };

        const UpdatedData = JSON.parse(localStorage.getItem('employees')).map((item) => {
            if (item.id == id) {
                return newItem;
            }

            return item;
        })

        localStorage.setItem('employees', JSON.stringify(UpdatedData));
    }

    static view() {

        if (localStorage.getItem('employees')) {
            JSON.parse(localStorage.getItem("employees")).forEach((item) => {

                const tr = document.createElement("tr");

                tr.innerHTML = `<tr>
                                <th scope="row">${item.id}</th>
                                <td>${item.name}</td>
                                <td>${item.email}</td>
                                <td>${item.mobile}</td>
                                <td>
                                    <button class="btn btn-success edit" data-id="${item.id}">Edit</button>
                                    <button class="btn btn-danger delete" data-id="${item.id}">Delete</button>
                                </td>
                                </tr>`;

                table.appendChild(tr);

            });
        }

    }

}

Employee.view();


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!empId.value) {
        let id = Math.floor(Math.random() * 10000);
        const newEmp = new Employee(id, name.value, email.value, mobile.value);

        // View New Data
        newEmp.showData();

        // Store Data
        newEmp.store();

        //Remove Data in Form
        name.value = '';
        email.value = '';
        mobile.value = '';
    } else {
        const id = empId.value;
        const newEmp = new Employee(id, name.value, email.value, mobile.value);
        newEmp.update(id);
        table.innerHTML = '';
        Employee.view();

        //Remove Data in Form
        name.value = '';
        email.value = '';
        mobile.value = '';
        empId.value = '';

    }


})

table.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {

        const id = +e.target.getAttribute('data-id');

        // get all data
        const emps = JSON.parse(localStorage.getItem('employees'));

        // get all data expect the selected id
        const newData = emps.filter(item => item.id != id);

        // Set The New Data in Local Storage
        localStorage.setItem('employees', JSON.stringify(newData));

        // Remove form view
        e.target.parentElement.parentElement.remove();

    } else if (e.target.classList.contains("edit")) {

        const id = +e.target.getAttribute('data-id');

        const item = JSON.parse(localStorage.getItem('employees')).find(item => item.id == id);

        name.value = item.name;
        email.value = item.email;
        mobile.value = item.mobile;
        empId.value = +id;
    }

})


let emo = [...'🤦‍♂️']
console.log(emo)