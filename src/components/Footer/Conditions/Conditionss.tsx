import { useEffect, useState } from "react";
import styles from "./Conditions.module.css";
import Header from "../../Header/Header";
import Footer from "../Footer";

const Conditionss = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 1000) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.conditionsBlock}>
      <div>
        <Header />
        {showScrollButton && (
            <button className={styles.butScroll} onClick={handleClick}>
              ⇧ К началу
          </button>
        )}
      </div>
      <div className={styles.imgText}>
        <h1>Спасибо, что пользуетесь Grozrent!</h1>
        <p>
          Настоящие Условия предоставления услуг («Условия Groznet»)
          представляют собой соглашение между вами и Groznet, имеющее
          обязательную юридическую силу и регулирующее использование вами
          сайтов, приложений и других продуктов Groznet (далее — «Платформа
          Groznet). Под используемыми в настоящих Условиях терминами Groznet,
          «мы», «нас» или «наш» подразумевается компания Groznet, с которой вы
          заключаете соглашение.
        </p>
        <img src="https://i.ibb.co/YhbjdQ9/b69e5386b722a043f934fbe745f4a07b.jpg" />
      </div>
      <div className={styles.mainText}>
        <p>
          Платформа Groznet — это онлайн-площадка, которая предоставляет
          пользователям («Пользователи») возможность публиковать, предлагать,
          искать и бронировать услуги. Пользователи, публикующие объявления и
          предлагающие услуги, именуются «Хозяева/Организаторы», а Пользователи,
          осуществляющие поиск, бронирование и пользование услугами, — «Гости».
          Хозяева предлагают в аренду места для проживания («Жилье»), а также
          иные услуги. (далее — «Услуги хозяев/организаторов» или «Услуги»,
          предложения таких услуг на Платформе Groznet именуются «Объявления»).
          Чтобы пользоваться многочисленными функциями Платформы Groznet,
          необходимо зарегистрировать аккаунт, указав точные данные, и
          поддерживать актуальность этих сведений. Groznet предоставляет
          Платформу Groznet и не владеет и не управляет Объявлениями или
          Услугами хозяев/организаторов, а также не контролирует и не предлагает
          их. Groznet не является стороной договорных отношений между
          Хозяевами/Организаторами и Гостями, а также агентом по недвижимости
          или страховщиком. Groznet не выступает в качестве агента
          Пользователей.
        </p>
        <p>
          Хозяева/Организаторы должны понимать и соблюдать все законы, правила,
          положения и условия договоров с третьими лицами, регулирующие Услуги
          хозяев/организаторов.
        </p>
      </div>
      <div className={styles.conditionstext}>
        <h3>Условия для Гостей</h3>
        <h4>1. Наша миссия</h4>
        <p>
          Наша миссия — построить мир, который станет домом для каждого.
          Пользователи Платформы Groznet публикуют миллионы Объявлений,
          предлагая арендовать домик или замок, посетить мастер-классы по
          приготовлению еды и не только. Здесь можно подобрать жилье и
          мероприятие на любой вкус. Чтобы узнать больше об Объявлении,
          ознакомьтесь с описанием и фотографиями, изучите профиль
          Хозяина/Организатора и отзывы Гостей. Если у вас остались вопросы,
          отправьте сообщение Хозяину/Организатору.
        </p>
        <h4>2. Поиск и бронирование на Groznet</h4>
        <h4>2.1. Поиск. </h4>
        <p>
          На Платформе Groznet можно находить Услуги хозяев/организаторов по
          таким критериям, как вид Услуги, пункт назначения, даты поездки и
          количество гостей. Используйте фильтры для более точного поиска.
          Результаты определяются на основе соответствия запросу и другим
          критериям. При этом учитываются такие факторы, как цена, свободные
          даты, Отзывы, история взаимодействия с клиентами и отмены
          бронирований, популярность, предыдущие поездки и сохраненные
          Объявления, требования Хозяев/Организаторов (например, минимальное или
          максимальное количество ночей) и другие факторы.
        </p>
        <h4>2.2. Бронирование.</h4>
        <p>
          Бронируя Объявление, вы обязуетесь оплатить все соответствующие
          комиссии, включая стоимость Жилья или Впечатления, применимые сборы, в
          частности сбор за услуги Groznet, плату на месте, налоги и другие
          позиции, указанные при оформлении заказа (далее — «Общая стоимость»).
          Вы также соглашаетесь с тем, что Groznet Payments может списать
          средства с помощью Способа оплаты (как определено в Условиях обработки
          платежей), который использовался для бронирования Жилья/Впечатления,
          чтобы получить сумму Требования о возмещении ущерба (как определено в
          разделе 15). После подтверждения бронирования между вами и
          Хозяином/Организатором будет заключено соглашение об оказании Услуг
          («Бронирование»). В дополнение к настоящим Условиям вы будете
          подчиняться и нести ответственность за соблюдение всех условий
          Бронирования, включая, помимо прочего, правила отмены и другие
          правила, стандарты, политики или требования, указанные в Объявлении
          или при оплате, которые применяются к Бронированию. Вы несете
          ответственность за ознакомление с этими правилами, стандартами,
          политиками и требованиями до осуществления бронирования. Для оказания
          Услуг некоторые Хозяева/Организаторы привлекают вторых
          хозяев/организаторов или принимают гостей в составе команды.
        </p>
        <h4>2.3. Бронирование Жилья.</h4>
        <p>
          Бронирование обеспечивает временные права на вход в Жилье, пребывание
          в нем и его использование. Хозяин оставляет за собой право посещения
          Жилья во время вашего пребывания, если: (i) это обоснованно
          необходимо, (ii) предусмотрено вашим соглашением с Хозяином и (iii)
          допустимо согласно действующему законодательству. Если вы остаетесь в
          Жилье после установленного времени выезда, Хозяин вправе принудить вас
          к выезду в соответствии с действующим законодательством, в том числе с
          помощью штрафа за превышение сроков проживания. Запрещается превышать
          максимально допустимое число Гостей.
        </p>

        <h3>3. Отмена, Проблемы, возврат средств и Изменение бронирования</h3>
        <h4>3.1. Отмена, Проблемы и возврат средств.</h4>
        <p>
          Если вы как Гость аннулируете Бронирование, причитающаяся вам сумма
          возврата обычно определяется согласно правилам отмены, указанным в
          Объявлении. В определенных ситуациях она может зависеть от других
          правил, которые имеют преимущественную силу. Если вы отмените
          Бронирование по независящим от вас обстоятельствам, то можете получить
          частичный или полный возврат в соответствии с Положением о применении
          уважительных причин. Если Хозяин/Организатор отменил бронирование или
          вы столкнулись с Проблемой (согласно определению в Правилах повторного
          бронирования и возврата средств), вы можете обратиться за помощью в
          повторном бронировании или претендовать на частичный или полный
          возврат в соответствии с указанными правилами. Применимые правила
          зависят от категории Объявления. Например, на Бронирование Впечатлений
          распространяются Правила компенсации гостю Впечатлений, а на
          Бронирование Luxe — Правила повторного бронирования и возврата в
          отношении жилья Luxe. Подробные сведения о покрытии и возврате средств
          приведены в Дополнительных юридических условиях и правилах.
        </p>
        <h4>3.2. Изменение бронирования.</h4>
        <p>
          {" "}
          Гости и Хозяева/Организаторы несут ответственность за изменение
          бронирования, которое они вносят самостоятельно на Платформе Groznet
          или через службу поддержки Groznet («Изменение бронирования»), и
          обязуются оплатить любые дополнительные суммы, сборы и налоги,
          связанные с любым Изменением бронирования.
        </p>

        <h3>4. Ваши обязанности и принятие риска</h3>
        <h4>4.1. Ваши обязанности.</h4>
        <p>
          Вы несете ответственность за собственные действия и бездействие, а
          также за действия и бездействие приглашенных вами лиц и лиц, которым
          вы предоставили доступ в Жилье, к Впечатлению или другим Услугам
          хозяев/организаторов. Например, это означает, что: (i) вы обязуетесь
          оставить Жилье (и личное имущество в нём) в том же состоянии, что и на
          момент прибытия; (ii) вы обязуетесь выплатить все разумные суммы по
          Требованию о возмещении ущерба, необходимые для покрытия ущерба,
          который вы, ваш гость (гости) или ваш питомец (питомцы) причинили
          Жилью; (iii) вы должны действовать добросовестно, относиться к другим
          людям с уважением и соблюдать действующее законодательство. Если вы
          бронируете Услугу хозяина/организатора для несовершеннолетнего гостя
          или он сопровождает вас, вы должны иметь законные полномочия
          действовать от его имени и несете единоличную ответственность за него.
        </p>
        <h4>
          4.2. Принятие вами риска. Вы признаете, что многие мероприятия
          сопряжены с риском, и во всех установленных законом случаях принимаете
          на себя весь риск в связи с вашим доступом к Платформе Groznet и
          Контенту (согласно определению в разделе 10) или их использованием,
          включая нахождение в Жилье, участие во Впечатлениях, использование
          других Услуг хозяев/организаторов и иное взаимодействие с
          Пользователями как в Интернете, так и лично. Это означает, что вы
          обязаны самостоятельно определить, подходит ли вам Услуга
          хозяина/организатора. Так, Услуги хозяев/организаторов могут
          предполагать риски заболеваний, травм, физических увечий или смерти,
          и, пользуясь Услугами хозяев/организаторов, вы добровольно и осознанно
          принимаете эти риски.
        </h4>
        <h2>Условия для хозяев/организаторов</h2>
        <h3>5. Прием гостей на Groznet</h3>
        <h4>5.1. Хозяин/Организатор. </h4>
        <p>
          Groznet предоставляет Хозяевам/Организаторам право использовать
          Платформу Groznet, чтобы делиться своим Жильем, Впечатлениями,
          предоставлять другие Услуги активному сообществу Гостей и получать
          доход. Создать Объявление легко, и для каждого из них вы можете
          устанавливать свою цену, свободные даты и правила.
        </p>
        <h4>5.2. Договорные отношения с Гостями. </h4>
        <p>
          {" "}
          Приняв запрос на бронирование или получив подтверждение бронирования
          через Платформу Groznet, вы заключаете соглашение непосредственно с
          Гостем и обязуетесь предоставить ему свои Услуги в соответствии с
          условиями и ценой, указанными в Объявлении. Вы также обязуетесь
          оплатить применимые сборы, в частности сбор за услуги Groznet (и
          соответствующие налоги), за каждое бронирование. Groznet Payments
          вычтет причитающиеся суммы из вашей выплаты, если мы не согласуем с
          вами иной способ расчетов. Все условия, правила и положения,
          включаемые в дополнительный договор с Гостями, должны: (i)
          соответствовать настоящим Условиям, нашим Дополнительным юридическим
          условиям, правилам и информации, содержащейся в вашем Объявлении, и
          (ii) быть четко указаны в описании Объявления.
        </p>
        <h4>5.3. Независимость Хозяев/Организаторов. </h4>
        <p>
          В отношениях с Groznet вы выступаете в качестве независимого лица или
          организации. В этом случае вы не являетесь работником, агентом,
          участником совместного предприятия или партнером Groznet, за
          исключением того, что Groznet Payments действует как агент по сбору
          платежей в соответствии с Условиями обработки платежей. Groznet не
          влияет на вашу Услугу хозяина/организатора и не управляет ею. Вы
          признаете, что предлагаете Услуги хозяев/организаторов по собственной
          инициативе и самостоятельно определяете их время, место, цену и
          условия.
        </p>

        <h2>Общие условия</h2>
        <h3>6. Отзывы</h3>
        <p>
          После оказания Услуг у Гостей и Хозяев/Организаторов будет возможность
          оставить отзыв друг о друге. Отзыв должен быть точным и не должен
          содержать дискриминационных, оскорбительных, порочащих или иных
          формулировок, нарушающих Положение Groznet об информации и Политику в
          отношении отзывов. Groznet не проверяет достоверность отзывов, и
          некоторые из них могут быть неверными или вводящими в заблуждение.
        </p>

        <h3>7. Контент</h3>
        <p>
          Размещая Контент, независимо от формы и средств, вы предоставляете
          Groznet неисключительную, всемирную, безвозмездную, безотзывную,
          бессрочную лицензию с правом сублицензирования и переуступки на
          копирование, изменение, подготовку производных произведений,
          распространение, публикацию и иное использование этого Контента без
          ограничений.{" "}
        </p>

        <h3>8. Изменения</h3>
        <p>
          Groznet может в любое время вносить изменения в настоящие Условия. При
          внесении существенных изменений мы публикуем отредактированные Условия
          на Платформе Groznet и указываем дату последнего обновления в начале
          публикации. Мы также сообщаем о значительных изменениях по электронной
          почте не менее чем за 30 дней до их вступления в силу. В случае
          несогласия с обновленными Условиями вы можете немедленно расторгнуть
          настоящее соглашение в соответствии с настоящими Условиями. Не
          расторгнув соглашение до момента вступления изменений в силу и
          сохраняя доступ к Платформе или продолжая использовать Платформу
          Groznet, вы подтверждаете факт принятия обновленных Условий.
        </p>

        <h3>9. Роль Groznet</h3>
        <p>
          На нашей платформе Пользователи имеют возможность публиковать,
          предлагать, искать и бронировать Услуги хозяев/организаторов. Несмотря
          на большие усилия, направленные на обеспечение удобства для
          Пользователей Groznet, мы не контролируем и не можем контролировать
          действия Гостей и Хозяев/Организаторов. Вы признаете, что компания
          Groznet вправе, но не обязана отслеживать использование Платформы
          Groznet и проверять информацию, предоставляемую Пользователями.
          Например, мы можем проверять, удалять и редактировать Контент или
          прекращать к нему доступ: (i) в целях обеспечения функционирования,
          безопасности и улучшения Платформы Groznet (в том числе для
          предотвращения мошеннических действий, оценки рисков, расследования и
          поддержки клиентов); (ii) для обеспечения соблюдения Пользователями
          настоящих Условий; (iii) во исполнение требований закона, решения или
          постановления суда, указаний правоохранительных, административных или
          государственных органов; (iv) для принятия мер в отношении Контента,
          признанного нами опасным или спорным; (v) для принятия мер,
          предусмотренных настоящими Условиями; (vi) для соблюдения и выполнения
          критериев качества или соответствия требованиям, в том числе путем
          удаления не отвечающих им Объявлений.{" "}
        </p>
        <h3>10. Аккаунты Пользователей</h3>
        <p>
          Чтобы пользоваться многочисленными функциями Платформы Groznet,
          необходимо зарегистрировать аккаунт. Регистрация разрешена только для
          юридических лиц, партнерств и лиц, достигших 18 лет. Вы заявляете и
          гарантируете, что не являетесь лицом или организацией, которым
          запрещено пользоваться Платформой Groznet в соответствии с
          законодательством США, вашего места жительства или иной
          соответствующей юрисдикции. Вы обязаны предоставить точную, актуальную
          и полную информацию во время регистрации, а также поддерживать
          актуальность сведений аккаунта. Вы не можете зарегистрировать
          несколько аккаунтов и передать свой аккаунт другому лицу. Вы несете
          ответственность за конфиденциальность и сохранность учетных данных
          аккаунта и не можете раскрывать их третьим лицам. Вы несете
          ответственность за действия, совершаемые через ваш аккаунт, и обязаны
          немедленно уведомить Groznet, если у вас есть основания полагать, что
          ваши учетные данные утеряны или украдены, либо в случае
          несанкционированного использования аккаунта. Мы вправе, но не обязаны
          предпринять следующие меры в рамках действующего законодательства: (i)
          попросить вас предоставить документы, удостоверяющие личность, или
          иные сведения; (ii) провести проверки для подтверждения вашей личности
          или вашего прошлого; (iii) проверить вас по сторонним базам данных или
          другим источникам, а также запросить отчеты у поставщиков услуг; (iv)
          запросить из официальных источников сведения о судимости или
          преступлениях сексуального характера либо аналогичные сведения,
          предусмотренные в соответствующей юрисдикции.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Conditionss;
