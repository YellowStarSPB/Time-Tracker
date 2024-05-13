import styles from './CircularStructure.module.scss';
const categories = [
    'Жилье',
    'Еда',
    'Транспорт',
    'Развлечения',
    'Медицина',
    'Покупки',
    'Услуги',
    'Фин.расходы',
];
function CircularStructure() {
    return (
        <div className={styles.circularStructure}>
            <div className={styles.top}>
                <h2 className={styles.title}>Структура</h2>
                <p className={styles.dropDown}>Расходы</p>
            </div>
            <a className={styles.allReportsLink} href="#">
                Все отчеты
            </a>

            <div className="pieContainer">
                <div id="pieSlice1" className="hold">
                    <div className="pie"></div>
                </div>
                <div id="pieSlice2" className="hold">
                    <div className="pie"></div>
                </div>
                <div id="pieSlice3" className="hold">
                    <div className="pie"></div>
                </div>
                <div id="pieSlice4" className="hold">
                    <div className="pie"></div>
                </div>
                <div id="pieSlice5" className="hold">
                    <div className="pie"></div>
                </div>
                <div id="pieSlice6" className="hold">
                    <div className="pie"></div>
                </div>
            </div>

            <div className={styles.categories}>
                {categories.map((item) => (
                    <span key={item} className={styles.categoriesItem}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CircularStructure;
