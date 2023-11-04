import { BiSolidPlusCircle, BiSolidMinusCircle } from "react-icons/bi";

const SingleFAQ = ({ id, title, info, activeId, toggleFAQ }) => {
  const activeTab = id === activeId;
  return (
    <div className="faq_item">
      <h3>
        <span>{title}</span>
        <button type="button" onClick={() => toggleFAQ(id)}>
          {activeTab ? <BiSolidMinusCircle /> : <BiSolidPlusCircle />}
        </button>
      </h3>
      {activeTab && <p>{info}</p>}
    </div>
  );
};

export default SingleFAQ;
