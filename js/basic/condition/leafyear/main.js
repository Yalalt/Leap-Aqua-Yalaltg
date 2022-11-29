let leafYear = 2022;

if (leafYear % 4 === 0) {
  if (leafYear % 100 !== 0) {
    console.log(leafYear + " > Өндөр жил мөн байна.");
  } else {
    if (leafYear % 400 === 0) {
      console.log(leafYear + " > Өндөр жил мөн байна.");
    } else {
      console.log(leafYear + " > Өндөр жил биш байна.");
    }
  }
} else {
  console.log(leafYear + " > Өндөр жил биш байна.");
}
