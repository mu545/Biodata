document.body.onload = function () {
  // a.k.a this
  let self = this

  // element
  let dom = document.getElementById('container')

  // context data
  let context = {
    dom: dom
  }

  /**
   * Initialization.
   *
   * @return  void
   */
  let init = function () {
    question(dom, context)
    answer(dom, context)
  }

  // Run init
  init()
}

/**
 * Question.
 *
 * @param   dom
 * @param   object
 * @return  void
 */
var question = function (dom, context) {
  // a.k.a this
  let self = this

  // create context data
  dom = dom.querySelector('#question')
  let ctx = context.question = {
    dom: dom
  }

  // input
  let input = dom.querySelectorAll('.question')

  /**
   * Initialization.
   *
   * @return  void
   */
  let init = function () {
    input.forEach(function (q) {
      q.addEventListener('click', self.askQuestion)
    })
  }

  /**
   * Ask a question.
   *
   * @param   dom
   * @return  void
   */
  this.askQuestion = function (q) {
    context.answer.tellAnswer(q.target.dataset.question)
  }

  // Run init
  init()
}

/**
 * Answer.
 *
 * @param   dom
 * @param   object
 * @return  void
 */
var answer = function (dom, context) {
  // a.k.a this
  let self = this

  // create context data
  dom = dom.querySelector('#answer')
  let ctx = context.answer = {
    dom: dom
  }

  // element
  let domAnswer = dom.querySelector('.answer')

  /**
   * Initialization.
   *
   * @return  void
   */
  let init = function () {

  }

  /**
   * Tell a answer.
   *
   * @param   string
   * @return  void
   */
  this.tellAnswer = function (q) {
    switch (q) {
      case 'story' :
        self.tellStory()
        break
      case 'skills' :
        self.tellSkills()
        break
    }
  }

  ctx.tellAnswer = this.tellAnswer

  /**
   * Fill answer.
   *
   * @return  void
   */
  this.fillAnswer = function (txt) {
    if (dom.style.display == 'none') {
      dom.style.display = 'initial'
    }

    domAnswer.innerHTML = txt
  }

  /**
   * Tell story.
   *
   * @return  void
   */
  this.tellStory = function () {
    let story = "I'm very interesting with the name of programming, my journey in learning programming was started since 2014 which I learn programming from the internet but its enough for my experience on 2018 I decided to join with the community Pondok programmer its biggest free learning camp for Indonesian people like me. At Pondok programmer, I learn how to become the social smart people and programming from the professional software developer. I am very interested in web development with javascript technologies for backend or frontend."

    self.fillAnswer(story)
  }

  /**
   * Tell skills.
   *
   * @return  void
   */
  this.tellSkills = function () {
    let skills = "I am familiar with common of web technologies like HTML, CSS, JavaScript and Node.js"

    self.fillAnswer(skills)
  }

  // Run init
  init()
}