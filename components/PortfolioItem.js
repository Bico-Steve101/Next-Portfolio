import Image from 'next/image';

const PortfolioItem = ({ item, handleItemClick }) => (
  <div className="col-lg-6">
    <div 
      className="trm-portfolio-item trm-scroll-animation"
      data-scroll
      data-scroll-offset={40}
      onClick={() => handleItemClick(item.url)}
    >
      <div className="trm-cover-frame">
        <Image
          className="trm-cover"
          src={item.img}
          alt={item.title}
          width={500}
          height={300}
          loading="lazy"
        />
      </div>
      <div className="trm-item-description">
        <h6>{item.title}</h6>
        <div className="trm-zoom-icon" onClick={(e) => e.stopPropagation()}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-eye" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioItem;