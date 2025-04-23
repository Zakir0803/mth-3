const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResult = document.getElementById('bmiResult');
    const bmiCategory = document.getElementById('bmiCategory');

    function calculateBMI() {
      const weight = parseFloat(weightInput.value);
      const heightCm = parseFloat(heightInput.value);
      if (!weight || !heightCm || heightCm <= 0) {
        bmiResult.textContent = 'Ваш результат';
        bmiCategory.textContent = 'Вывод';
        return;
      }

      const heightM = heightCm / 100;
      const bmi = weight / (heightM * heightM);
      const roundedBMI = bmi.toFixed(1);
      bmiResult.textContent = `Ваш результат: ${roundedBMI}`;

      let category = '';
      if (bmi < 18.5) {
        category = 'Недостаточная масса тела';
      } else if (bmi < 25) {
        category = 'Нормальная масса тела';
      } else if (bmi < 30) {
        category = 'Избыточная масса тела';
      } else if (bmi < 35) {
        category = 'Ожирение I степени';
      } else if (bmi < 40) {
        category = 'Ожирение II степени';
      } else {
        category = 'Ожирение III степени';
      }

      bmiCategory.textContent = `Вывод: ${category}`;
    }

    weightInput.addEventListener('input', calculateBMI);
    heightInput.addEventListener('input', calculateBMI);