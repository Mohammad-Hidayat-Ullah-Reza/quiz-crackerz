import React from "react";

const Blog = () => {
  const questionsAndAnswers = [
    {
      question: "What's the Purpose of React Router?",
      answer: `React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.`,
    },
    {
      question: "How does context api works?",
      answer: `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.`,
    },
    {
      question: "useRef() Hook :",
      answer:
        "The useRef() hook allows you to persist value between renders. The useRef() returns a mutable object, which has a .current property. .current property has the value that's provided initially in the useRef() hook.",
    },
  ];

  return (
    <div>
      <h2 className="my-8 font-bold text-5xl text-white">
        Welcome to Reza Blog
      </h2>
      {questionsAndAnswers.map((questionAndAnswer) => {
        return (
          <div className="p-5 m-14 text-white text-left border border-white rounded-md">
            <h4 className="mb-3 font-bold text-3xl">
              {questionAndAnswer.question}
            </h4>
            <p className="text-xl">{questionAndAnswer.answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
