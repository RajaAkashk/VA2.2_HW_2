  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>

</head>

<body>
  <label>Choose your gender: </label><br>
  <input type="radio" name="gender" value="Male" />Male
  <input type="radio" name="gender" value="Female" />Female
  <input type="radio" name="gender" value="Others" />Others
  <p id="genderResult"></p>

  <label>Choose your meal preference:</label> <br>
  <input type="radio" name="meal" value="Vegetarian" />Vegetarian<br>
  <input type="radio" name="meal" value="Non-Vegetarian" />Non-Vegetarian <br>
  <p id="mealPreferenceResult"></p>


  <label>Choose a size:</label> <br>
  <input type="radio" name="size" value="Small" />Small <br>
  <input type="radio" name="size" value="Medium" />Medium <br>
  <input type="radio" name="size" value="Large" />Large <br>
  <p id="sizeResult"></p>



  <label>Program 1: Select a Music genre:</label><br>
  <input type="radio" name="music" value="Pop" />Pop <br>
  <input type="radio" name="music" value="Rock" />Rock <br>
  <input type="radio" name="music" value="Hip-hop" />Hip-hop <br>
  <p id="musicGenreResult"></p>


  <label>Program 2: Choose a Language Prefrence:</label><br>
  <input type="radio" name="language" value="English" />English <br>
  <input type="radio" name="language" value="Spanish" />Spanish <br>
  <input type="radio" name="language" value="French" />French <br>
  <p id="languageResult"></p>


  <label>Program 3: Select a job:</label><br>
  <input type="radio" name="job" value="Developer" />Developer <br>
  <input type="radio" name="job" value="Designer" />Designer <br>
  <input type="radio" name="job" value="Manager" />Manager <br>
  <button id="jobBtn">Display Selected Job Role</button>
  <p id="jobResult"></p>

  <label>Program 4: Choose a Favourite Hobby:</label><br>
  <input type="radio" name="hobby" value="Reading" />Reading <br>
  <input type="radio" name="hobby" value="Gardening" />Gardening <br>
  <input type="radio" name="hobby" value="Sports" />Sports <br>
  <button id="hobbyBtn">Display Selected Hobby</button>
  <p id="hobbyDisplay"></p>


  <label>Program 5: Select a Clothing Styling</label><br>
  <input type="radio" name="clothing" value="Casual" />Casual <br>
  <input type="radio" name="clothing" value="Formal" />Formal <br>
  <input type="radio" name="clothing" value="Sporty" />Sporty <br>
  <button id="clothingBtn">Display Selected Style</button>
  <p id="clothingDisplay"></p>


  <script>

    const genderRadioBtn = document.getElementsByName('gender')
    const genderResult = document.getElementById('genderResult')

    for (let i = 0; i < genderRadioBtn.length; i++) {
      genderRadioBtn[i].addEventListener('change', function () {
        const selectedRadioBtn = document.querySelector('input[name="gender"]:checked').value
        genderResult.textContent = `Selected Gender: ${selectedRadioBtn}`
      })
    }



    const mealRadioBtn = document.getElementsByName('meal')
    const mealPreferenceResult = document.getElementById('mealPreferenceResult')

    for (let i = 0; i < mealRadioBtn.length; i++) {
      mealRadioBtn[i].addEventListener('change', function () {

        const selectedMealPreference = document.querySelector('input[name="meal"]:checked').value;

        mealPreferenceResult.textContent = `Selected Meal Preference: ${selectedMealPreference} `
      })
    }



    const sizeRadioBtn = document.getElementsByName('size')
    const sizeResult = document.getElementById("sizeResult")

    for (let i = 0; i < sizeRadioBtn.length; i++) {
      sizeRadioBtn[i].addEventListener('change', function () {
        const selectedSize = document.querySelector("input[name='size']:checked").value

        sizeResult.textContent = `Selected Size: ${selectedSize} `
      })
    }


 const musicRadioBtn = document.getElementsByName('music')
    const musicGenreResult = document.getElementById('musicGenreResult')

    for (let i = 0; i < musicRadioBtn.length; i++) {
      musicRadioBtn[i].addEventListener('change', function () {
        const selectedMusic = document.querySelector('input[name="music"]:checked').value

        musicGenreResult.textContent = `Selected genre: ${selectedMusic}`
      })
    }


    const languageRadioBtn = document.getElementsByName('language')
    const languageResult = document.getElementById('languageResult')

    for (let i = 0; i < languageRadioBtn.length; i++) {
      languageRadioBtn[i].addEventListener('change', function () {
        const selectedLanguage = document.querySelector('input[name="language"]:checked').value;

        languageResult.textContent = `Selected Language: ${selectedLanguage}`
      })
    }


    const jobRadioBtn = document.getElementsByName('job')
    const jobResult = document.getElementById('jobResult')
    const jobBtn = document.getElementById('jobBtn');

    jobBtn.addEventListener('click', function () {
      let selectedJob;
      for (let i = 0; i < jobRadioBtn.length; i++) {
        if (jobRadioBtn[i].checked) {
          selectedJob = jobRadioBtn[i].value;
        }
      }
      if (selectedJob) {
        jobResult.textContent = `selected job role: ${selectedJob}`
      } else {
        jobResult.textContent = `Choose a job role from above.`
      }
    }
    )


    const hobbyRadioBtn = document.getElementsByName('hobby')
    const hobbyBtn = document.getElementById('hobbyBtn')
    const hobbyDisplay = document.getElementById('hobbyDisplay')

    hobbyBtn.addEventListener('click', function () {
      let selectedHobby;
      for (let i = 0; i < hobbyRadioBtn.length; i++) {
        if (hobbyRadioBtn[i].checked) {
          selectedHobby = hobbyRadioBtn[i].value
        }
      }

      if (selectedHobby) {
        hobbyDisplay.textContent = `Selected Hobby: ${selectedHobby}`
      } else {
        hobbyDisplay.textContent = `Select a Hobby from above.`
      }
    })




    const clothingRadioBtn = document.getElementsByName('clothing')
    const clothingBtn = document.getElementById('clothingBtn')
    const clothingDisplay = document.getElementById('clothingDisplay')

    clothingBtn.addEventListener('click', function () {
      let selectedClothing;
      for (let i = 0; i < clothingRadioBtn.length; i++) {
        if (clothingRadioBtn[i].checked) {
          selectedClothing = clothingRadioBtn[i].value;
        }
      }

      if (selectedClothing) {
        clothingDisplay.textContent = `Selected clothing style: ${selectedClothing}`
      } else {
        clothingDisplay.textContent = `Please select a clothing style.`
      }
    })

  </script>
</body>

</html>
