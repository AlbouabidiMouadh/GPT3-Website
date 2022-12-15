import React from "react";
import "./blog.css";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";
import { Article } from "../../Components";
function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            pic={blog1}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            pic={blog2}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            pic={blog3}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            pic={blog4}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            pic={blog5}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
