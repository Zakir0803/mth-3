function calculateAge() {
    const input = document.getElementById("birthdate").value;

    if (!input) {
      document.getElementById("result").textContent = "Пожалуйста, выберите дату рождения.";
      return;
    }

    const birthDate = moment(input);
    const now = moment();

    const years = now.diff(birthDate, 'years');
    birthDate.add(years, 'years');

    const months = now.diff(birthDate, 'months');
    birthDate.add(months, 'months');

    const days = now.diff(birthDate, 'days');

    document.getElementById("result").textContent =
      `Ваш возраст: ${years} лет, ${months} месяцев и ${days} дней.`;
  }