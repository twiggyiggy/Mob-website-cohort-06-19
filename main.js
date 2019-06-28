'use strict';

function main() {
  var inputField = document.querySelector('#search');
  var sectionSearch = document.querySelector('.search-students');

  var listener = function(event) {
    sectionSearch.innerHTML = null;

    var searchText = event.target.value.toUpperCase();
    var studentsFiltered = filterTheStudentsBasedOnSearch(searchText);
    var listContainer = displayStudentsSearch(studentsFiltered);
    
    sectionSearch.appendChild(listContainer);
  }

  var filterTheStudentsBasedOnSearch = function(searchText) {
    var filteredStudents = students.filter(function(student) {
      return student.name.toUpperCase().includes(searchText);
    });

    return filteredStudents;
  }

  var displayStudentsSearch = function(filteredStudents) {
    var ul = document.createElement('ul');

    filteredStudents.forEach(function(student) {
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.innerHTML = student.name;
      link.setAttribute('href', './' + student.url);
      li.appendChild(link);
      ul.appendChild(li);
    });

    return ul;
  }

  inputField.addEventListener('input', listener);
};

window.addEventListener('load', main);
