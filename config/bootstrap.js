/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {
  // Set up fake development data (or if we already have some, avast)
  if (await Users.count() <= 0) {
    await Users.createEach([
      { username: 'nergal' },
      { username: 'merdoc' },
    ]);
  }

  if (await EventTypes.count() <= 0) {
    await EventTypes.createEach([
      { name: 'Камерка', slug: 'camera' },
      { name: 'Полигонка', slug: 'poly' },
      { name: 'Городская', slug: 'city' },
      { name: 'Настольная', slug: 'desk' },
    ]);
  }

  if (await Events.count() <= 0) {
    await Events.createEach([
      {
        name: 'Harry Potter и Кубок сезона',
        imageUrl: 'http://game.vzaperti.com.ua/a/009/pic/potter.jpg',
        description: '<p>Приветствуем вас, дорогие наши маленькие волшебники, в школе чародейства и волшебства Хогвартс. Со всего мира съезжаются совершеннолетние маги, чтобы принять участие в грандиозном событии, которое проводится раз в сотню лет, и событие это - Кубок сезона! Если вы не магглы, то полируйте свои волшебные палочки, повторяйте Защиту от Темных Искусств, делайте шпаргалки по зельеварению - мы скоро начинаем! Бросать свои имена в чашу можно тут: http://game.vzaperti.com.ua/a/009/</p><p>Для игры вам нужно:</p><p>- Собрать друзей (до пяти человек с водителем).<br />- Зарегистрировать свою команду (или играть уже существующей) и подать заявку на игру по ссылке http://game.vzaperti.com.ua/a/009<br />- Фонарики для каждого члена экипажа.<br />- Смартфон с выходом в интернет (желательно каждому).<br />- Ждите дополнений.</p><p>Стоимость игры – 500 грн. с команды.</p><p>Вы можете оплатить онлайн при подаче заявки (ссылка выше), на старте перед игрой либо на площадке квест-комнат “Взаперти” с 11:00 до 20:00 по адресу ул. Владимирская, 82А. Кстати: если у вас есть карточка Криптекс Клуба, не забудьте взять ее с собой 😉 Она даст скидку 20% на стоимость игры.</p><p>Время сбора:<br />19 мая 18:30 (старт в 19:00)</p><p>Место сбора:<br />парковка перед библиотекой им. Вернадского (метро Демеевская), 50.403704, 30.517255</p><p>Длина маршрута: уточняется</p><p>Время игры: 4 часа.</p><p>Игра будет проходить для двух лиг: Открытой и Лиги профи. Для Лиги профи будет больше заданий, сложней поиск, могут быть другие тайминги (время до подсказок и до автоперехода). Каждая команда в начале игры сама решает, в какой лиге играть.</p><p>На финише будут призы от “Взаперти” и награждение в уютном месте, где можно расслабиться после квеста.</p><p>Кстати, у нас есть дополнительный бонусный приз за лучший тематический дресс-код. Мы вас отфотографируем на старте и вручим приз на награждении.</p><p>И помним, что награждение за финал – это награждение по результатам сезона, ведь команды на финише получают гандикап. Подробней описано в регламенте: https://vzaperti.com.ua/s/auto-rules</p><p>Не пропустите поистине волшебный финал!</p>',
        price: '{}',
        dateStart: '2018-05-19 19:00:00',
        dateEnd: '2018-05-19 23:00:00',
        location: 'ул. Владимирская, 82а, Киев, 01033',
        latlng: '50.43538,30.50878',
        appDeadline: '2018-05-19 19:00:00',
        maxPlayers: 1000,
        admins: [2],
        type: 3,
        owner: 1,
      }
    ])
  }

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
