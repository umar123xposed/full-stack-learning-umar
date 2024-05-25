const baseURL= "http://localhost:3000/student"

    const fetchAndDisplayStudents = async () => {
        try {
            const response = await fetch(baseURL);
            const students = await response.json();

            const tableBody = document.getElementById('student-table-body');
            tableBody.innerHTML = '';

            students.forEach(student => {
                const newRow = `<tr>
                                    <td>${student.name}</td>
                                    <td>${student.fname}</td>
                                    <td>${student.age}</td>
                                </tr>`;
                tableBody.innerHTML += newRow;
            });
        } catch (error) {
            console.error('Error fetching and displaying students:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: document.getElementById('first_name').value,
            fname: document.getElementById('last_name').value,
            age: document.getElementById('age').value
        };

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                await fetchAndDisplayStudents();
                document.getElementById('first_name').value = '';
                document.getElementById('last_name').value = '';
                document.getElementById('age').value = '';
            } else {
                console.error('Error adding student:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    document.getElementById('submit-button').addEventListener('click', handleSubmit);

    window.addEventListener('DOMContentLoaded', fetchAndDisplayStudents);

