import {
  v4 as uuidv4
} from "uuid";

const links = {
  state: {
    tours: [{
        id: uuidv4(),
        image: 'mount.jpeg',
        header: 'Новогодний Дагестан.',
        text: `
              Преимущество этого путешествия: отметим Новый год в теплой компании,
                на берегу Каспийского моря;
              гастрономические изыски– отведаем
              национальные блюда в лучших заведениях республики;
              быт и культура
              Северного Кавказа– посетим древнейшие города и селения, знаменитые
              мечети, музеи, боевые крепости и многое другое;
              побываем один из
              главных историко - культурных центров Дагестана– селение Ахты.Встреча,
              Сулакский каньон Встречаем группу в аэропорту Уйташ г.Махачкала(до 11: 00 мск) и выдвигаемся через Буйнакский перевал в сторону Сулакского
              каньона.Первую остановку делаем на Чиркейском водохранилище.Там вы
              начнете с упоением наполнять ваш фотоальбом, посвященный Дагестану и
              Новогодним каникулам, множеством красивых видов нетронутой природы.
              После это мы поднимемся на смотровую площадку« Дубки»(высота около 1000 метров над уровнем моря) и с высоты орлиного полета насладимся
              видами драгоценной жемчужины Дагестана– Сулакского каньона.Далее нас
              ждет вкуснейший обед свежевыловленной форелью в ресторане экокомплекса« Главрыба».После небольшого отдыха нам предстоит переезд в самый
              Древний город России– Дербент.Размещение в отеле на берегу
              Каспийского моря.Отдых.Экскурсия по Дербенту, Новогодний банкет Утро
              начнется с завтрака в ресторане отеля.Далее переезд на экскурсию в
              Цитадель Нарын - Кала и полное погружение в захватывающую историю
              крепости.По окончании– прогулка по улочкам Старого города(магалам).
              `
      },
      {
        id: uuidv4(),
        image: '2.jpg',
        header: 'Новый год в Териберке на берегу океана',
        text: `
              Водопад и береговая батарея Подъём в 08: 00. Завтрак в 09: 00. Выход
              на маршрут в 10: 00. Сегодня в программе пеший радиальный выход на
              северо - запад по побережью к териберскому водопаду и позициям
              артиллерийской береговой батареи времён Великой Отечественной
              войны.Возвращение в гостиницу к 16: 00– 17: 00. Ужин около 18: 00.
              В тёмное время суток будем охотиться за Полярным сиянием.
              Протяженность: от 10 до 20 км пешком за день(на усмотрение гида и по согласования с участниками тура).Старая Териберка Подъём в
              08: 00. Завтрак в 09: 00. Выход на маршрут в 10: 00. Сегодня группу
              ждёт пеший радиальный выход на юго - восток по побережью, посещение
              губ Орловка и Завалишина, живописная дорога к Териберскому
              полуострову.На этом маршруте группа проходит« старую» Териберку и
              её основные достопримечательности: кладбище кораблей, заброшенные
              больницу и школу, выброшенное штормом рыболовецкое судно и
              песчаные пляжи.С 20: 00 мониторим прогнозы по сиянию, готовые
              выбежать на улицу и наслаждаться небесным светопредставлением.`
      },
      {
        id: uuidv4(),
        image: 'elbrus.jpeg',
        header: 'Восхождение на Эльбрус на Новый год.',
        text: `         
              Первый день акклиматизации.Выход к водопаду« Девичьи Косы» и к
              Обсерватории РАН Трансфер Пятигорск– пос.Терскол в 9 утра(ориентировочно 3 - 4 часа по горной дороге в Баксанское ущелье).
              Размещение в гостевом доме в пос.Терскол.Выход в высокогорную
              зону для акклиматизации.Подъем к водопаду« Девичьи Косы» и далее(по самочувствию, погоде) к обсерватории Российской Академии Наук(3000 метров).Путь проходит через сосновый лес, базальтовые
              скульптуры– отличные места для фотосъемки.Решение о маршруте
              принимается гидом в зависимости от состояния самого маршрута,
              прогноза погоды, самочувствия группы.Налюбовавшись прекрасными
              видами– спускаемся в Терскол.Ужин.Ночевка в гостевом доме в
              поселке Терскол.Подъем на склоны г.Чегет - Тау - Чана(в простонародье— Чегет) до высоты— 3000 метров Грамотная
              акклиматизация– залог успешного восхождения, поэтому сегодня
              продолжаем подъем.После завтрака, поднимаемся на склоны горы
              Чегет для высоты 3000 метров.Поднявшись наверх, мы увидим
              Западную и Восточную вершины Эльбруса, а также весь маршрут
              восхождения.Здесь– станция Чегетской канатной дороги и кафе« Ай», где можно отведать блюда национальной кухни, горный чай и
              знаменитые пирожки с мясом и брусникой.На подъеме рекомендуется
              не пользоваться подъемниками, т.к.лучшие результаты достигаются
              при физической нагрузке.После прогулки и обеда, ваш горный гид
              поможет разобраться с необходимым снаряжением для подъема на гору.
                           `
      },

      {
        id: uuidv4(),
        image: 'crimea.jpeg',
        header: 'Праздничный Крым. Новый год в Севастополе.',
        text: `
              Встреча группы. Экскурсия по Бахчисараю. Празднование Нового года
              в Севастополе Встреча гостей: на ж/д вокзале г. Симферополя с
              10:00 до 10:30 (внутренний дворик вокзала, возле фонтана
              «Голуби»); в аэропорту г. Симферополя с 11:30 до 12:00 (справа от
              выхода из здания терминала (снаружи здания), над выходом –
              наружная надпись: «Симферополь»). Трансфер в Бахчисарай –
              историческую столицу Крымского ханства, расположенную в окруженной
              Крымскими горами живописной долине реки Чурук-Су. Обед (с
              элементами крымско-татарской кухни) и дегустация крымских вин
              разных марок. Знакомство с дворцовым комплексом Ханского дворца –
              резиденцией династии Гиреев и единственным в мире образцом
              крымско-татарской архитектуры и быта: дворцовая мечеть, зал Совета
              и Суда, гарем, прославленный Пушкиным Фонтан слез, Золотой фонтан,
              Персидский дворик. По желанию, на выбор, предлагаем посетить
              (доп.плата, к месту проведения факультативных экскурсий туристы
              добираются самостоятельно): музей с мини-зоопарком «Крым на
              ладони» – самый большой в Крыму парк миниатюр, где собраны все
              историко-культурные и архитектурные достопримечательности
              полуострова; Свято-Успенский пещерный монастырь и святой источник
              в ущелье Марьям-Дере (самостоятельно); кофейню-музей «Дегирмен»,
              где вы увидите макет древнего Бахчисарая, который оживает
              благодаря эффектам света и звука, а также попробовать вкуснейший
              восточный кофе. Переезд в Севастополь через Инкерман, путевая
              информация о Свято-Климентском пещерном монастыре и обзор
              средневековой крепости Каламита. Размещение в одной из гостиниц
              города. Празднование Нового года в обстановке уличного гулянья в
              центре Севастополя на площади Нахимова (самостоятельно).`
      },
      {
        id: uuidv4(),
        image: 'polar.jpg',
        header: 'Три дня за Полярным кругом.',
        text: `
              Мурманск, охота за северным сиянием(с сентября по апрель) Завтрак
              в отеле для проживающих в отеле по программе.09: 00 Встреча с
              группой у отеля« Меридиан» на площади Пять Углов.Заезд в отель« Огни Мурманска».Переезд в поселок Териберка.Мы на целый день
              уедем в уже ставшую легендой Териберку.Магическая красота здешних
              мест завораживает любого путника.Экскурсия на водопад, каменный
              пляж« яйца драконов»(подвозка на снегоходе к месту начала экскурсии с декабря по апрель).Путешествие в северную сказку, где
              старые корабли видят сны о прошлом, водопад сверкает застывшими
              льдами, а пляж из« яиц драконов» поражает своим размахом.
              Мистические камни - сейды молчаливо хранят тысячелетние тайны, а
              взору предстают неповторимые и удивительные пейзажи!Обед
              традиционной кухни в ресторане.Свободное время.Возвращение в
              Мурманск.Трансфер к отелям« Огни Мурманска», «Меридиан».Отдых.
              `
      },
      {
        id: uuidv4(),
        image: 'altay.jpg',
        header: 'Зимний Алтай',
        text: `
              Зубрятник– Камышлинский водопад Завтрак в кафе« Таежник» После
              завтрака выезд на экскурсию.Первым объектом посещения станет
              территория всесезонного курорта« Манжерок».Посещение
              Манжерокского озера, которое находится недалеко от села Манжерок,
              у подножья гор Синюха и Малая Синюха.Затем на гондольном
              подъемнике подниметесь на обзорную площадку горы Синюха, откуда
              открывается красивая панорама долины реки Катунь.Переезд до
              зубрятника, где есть возможность полюбоваться грациозными маралами
              и величественными, суровыми зубрами.Обед в кафе на территории
              туркомплекса“ Берендеевка” Переезд до с.Барангол.Пешая экскурсия
              на Камышлинский водопад.Возвращение в« Таежник».Ужин.Вечером
              Мастер - класс по завариванию Алтайского чая и приготовлению
              алтайских сладостей ток - чок.Протяженность: на авто– 50 км,
                пешком– 5 км.
              `
      },

    ]

  },
  getters: {
    getToursLinks(state) {
      return {
        tours: state.tours,
      };
    },
    getToursById(state) {
      return (id) => {
        return state.tours.find((link) => link.id === id)
      }
    },
  },
}

export default links