// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a triange.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-triange').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = base * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  
}
