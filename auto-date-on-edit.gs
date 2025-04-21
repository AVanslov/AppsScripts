function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const editedCell = e.range;

  // Проверка: только если редактируется столбец A (1) и не в заголовке (строка > 1)
  if (editedCell.getColumn() === 4 && editedCell.getRow() > 1) {
    const dateCell = sheet.getRange(editedCell.getRow(), 5); // Столбец B (2)

    if (editedCell.getValue() !== "") {
      // Если значение не пустое — ставим дату
      dateCell.setValue(new Date());
    } else {
      // Если значение удалено — очищаем дату
      dateCell.setValue("");
    }
  }
}
