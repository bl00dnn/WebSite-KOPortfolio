document.querySelector('.button_send_class').addEventListener('click', function() {
    var name = document.querySelector('input[placeholder="Кирилл"]').value;
    var surname = document.querySelector('input[placeholder="Ошуркевич"]').value;
    var contact = document.querySelector('input[placeholder="+7 999 555-55-55"]').value;
    var description = document.querySelector('textarea[placeholder="Требуется сделать 3D машину в..."]').value;

    var namePattern = /^[A-ZА-Я][a-zа-я]*$/;
    var surnamePattern = /^[A-ZА-Я][a-zа-я]*$/;
    var contactPattern = /^(\+|8)[0-9]{1,11}$/;

    if (!namePattern.test(name)) {
        alert('Имя должно начинаться с заглавной буквы и содержать только буквы');
        return;
    }

    if (!surnamePattern.test(surname)) {
        alert('Фамилия должна начинаться с заглавной буквы и содержать только буквы');
        return;
    }

    if (!contactPattern.test(contact)) {
        alert('Номер телефона должен начинаться с + или 8 и содержать не более 10 цифр');
        return;
    }

    var message = `👤\n*Имя:* ${name}\n*Фамилия:* ${surname}\n\n📞\n*Контакты:* ${contact.replace('+', '\\+')}\n\n📝\n*Описание:* ${description.replace('-', '\\-')}`;
    fetch('https://api.telegram.org/bot7249782757:AAEENozfpuEFYp1NXi43RGAMqYCgpCzmySU/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '452271178',
            text: message,
            parse_mode: 'MarkdownV2'
        })
    }).then(response => response.json())
      .then(data => console.log(data));
});
