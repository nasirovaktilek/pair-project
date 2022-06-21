import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  // сохраняем в переменные кнопки назад и вперед из index.html для пагинации
  let prevBtn = document.getElementById("prevBtn");
  let nextBtn = document.getElementById("nextBtn");

  // событие на кнопку пред
  prevBtn.addEventListener("click", () => {
    if (currentPage <= 1) return; // проверка на то, чтобы текущая страница не уменьшалась 1
    currentPage = currentPage - 1; // уменьешение текущей страницы на одну, если условие не сработает
    readBooks(); // вызов функции для отображения данных, после нажатия кнопки пред
  });

  // событие на кнопку след
  nextBtn.addEventListener("click", () => {
    if (currentPage >= countPage) return; // проверка на то, чтобы текущая страница не увеличилась количества всех страниц(countPage)
    currentPage = currentPage + 1; // увелечение текущей страницы на одну, если условие не сработает
    readBooks(); // вызов функции для отображения данных, при нажатии кнопки след
  });

  // функция для нахождения количества страниц
  function sumPage() {
    fetch(API) // запрос в db.json, для того чтобы получить весь массив с книгами
      .then((res) => res.json()) // переформатируем в обычный формат js
      .then((data) => {
        // сохраняем в переменную количесвто всех страниц, с помощью свойства length узнаём длину массива, затем делим на лимит(сколько карточек хотим отобразить на одной странице) и обворачиваем в метод Math.ceil(), для того чтобы округлить резульат
        countPage = Math.ceil(data.length / 6);
      });
  }

  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}

// <!-- PAGINATION START -->
// <nav aria-label="Page navigation example">
//   <ul class="pagination">
//     <li class="page-item">
//       <a class="page-link" id="prevBtn" href="#">Пред</a>
//     </li>
//     <li class="page-item">
//       <a class="page-link" id="nextBtn" href="#">След</a>
//     </li>
//   </ul>
// </nav>
// <!-- PAGINATION FINISH -->
