const table = document.createElement('table');
document.body.prepend(table);
let countTable = 1;

for (let count = 0; count < 10; count ++) {
    const td = document.createElement('td');
    table.append(td);

    for (let innerCount = 0; innerCount < 10; innerCount++) {
        const tr = document.createElement('tr');
        td.append(tr);
        tr.innerText = `${countTable}`;
        countTable++;
    }
}