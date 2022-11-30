let leafYear = 2900;

if(leafYear % 4 === 0) {
  if(leafYear % 100 === 0) {
    if(leafYear % 400 === 0) {
      if(leafYear % 1000 === 0) {
        console.log("Алдаа гарлаа...");
      } else {
        console.log(leafYear + " > Өндөр жил мөн байна.");
      }
    } else {
      console.log(leafYear + " > Өндөр жил биш байна.");
    }
  } else if(leafYear % 1000 === 0) {
    console.log("Алдаа гарлаа...");
  } else {
    console.log(leafYear + " > Өндөр жил мөн байна.");
  }
} else {
  console.log(leafYear + " > Өндөр жил биш байна.");
}