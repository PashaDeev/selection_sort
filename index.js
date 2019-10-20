const init = [3, 0, 6, 5, 1];
console.log(`-------------------------`);
console.log(`init`, init);
console.log(`-------------------------`);

const selectionSort = arr => {
  let sortStart = 0;
  const { length } = arr;

  while (sortStart < length) {
    // Получаем неотсортированную часть
    const unSort = arr.slice(sortStart);
    console.log("unsortPart", unSort);

    // Узнаем индекс наименьшего элемента
    let minElem = null;
    let i = 0;
    let currentLength = unSort.length;

    for (i; i < currentLength; i++) {
      if (minElem === null) {
        minElem = i;
      }
      if (unSort[i] < unSort[minElem]) {
        minElem = i;
      }
    }

    console.log("min index", minElem);

    //Удаляем наименьший элемент из массва
    console.log("position", minElem + sortStart, arr.length);
    const [elem] = arr.splice(minElem + sortStart, 1);
    console.log("min elem", elem);
    console.log("arr after splice", arr);
    // Добавляем элемент в начало массива
    arr.splice(sortStart, 0, elem);
    console.log("arr after unshift", arr);
    sortStart += 1;
  }
  return arr;
};

const result = selectionSort(init);
console.log(`-------------------------`);
console.log(`result`, result);
console.log(`-------------------------`);
