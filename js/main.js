'use strict';

function DataTable(config, data) {
    const table = document.createElement('table');

    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const firstCell = document.createElement('th');
    firstCell.textContent = '№';
    headerRow.appendChild(firstCell);
    config.columns.map(c => c.title).forEach(title => {
        const cell = document.createElement('th');
        cell.textContent = title;
        headerRow.appendChild(cell);
    });
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    const tableBody = document.createElement('tbody');
    let number = 0;
    data.forEach((element) => {
        const bodyRow = document.createElement('tr');
        const firstCell = document.createElement('td');
        firstCell.textContent = ++number;
        bodyRow.appendChild(firstCell);
        config.columns.map(c => c.value).forEach((value) => {
            const cell = document.createElement('td');
            cell.textContent = element[value];
            bodyRow.appendChild(cell);
        });
        tableBody.appendChild(bodyRow);
    });
    table.appendChild(tableBody);

    document.querySelector(config.parent).appendChild(table);
}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: 'Ім’я', value: 'name' },
        { title: 'Прізвище', value: 'surname' },
        { title: 'Вік', value: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкін', age: 15 },
];

DataTable(config1, users);