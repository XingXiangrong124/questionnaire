import { FC } from 'react';
import styles from './QuestionCard.module.scss';
type CardType = {
  _id: string;
  name: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
};
const QuestionCard: FC<CardType> = (props: CardType) => {
  const { _id, name, isPublished, answerCount, createAt } = props;
  return (
    <div className={styles.container} key={_id}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{name}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
          &nbsp;
          <span>答卷:{answerCount}</span>
          &nbsp;
          <span>{createAt}</span>
        </div>
      </div>
      <div className={styles.operation}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
