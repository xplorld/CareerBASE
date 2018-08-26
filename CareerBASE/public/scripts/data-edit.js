function add_line(table_xpath) {
    //tabindex=1 for editableTableWidget to work on newly appended rows
    var template = '<tr><td tabindex=1>key</td><td tabindex=1>value</td></tr>';
    var tbody = $(table_xpath + ' > tbody');
    tbody.append(template);
}

$(function () {
    $('#public-data-edit-table').editableTableWidget();
    $('#private-data-edit-table').editableTableWidget();
});