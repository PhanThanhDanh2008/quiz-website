// ======= marketing.js =======


// Marketing Quiz Data
const marketingQuestions = [
      {
    question: "Trong mô hình 4P của Marketing mix, 'Promotion' (Xúc tiến) bao gồm những hoạt động nào sau đây?",
    options: [
      "Giá cả sản phẩm, kênh phân phối, sản phẩm, dịch vụ khách hàng.",
      "Quảng cáo, quan hệ công chúng, khuyến mãi, bán hàng cá nhân.",
      "Nghiên cứu thị trường, phát triển sản phẩm, định giá, truyền thông.",
      "Định vị thương hiệu, phân khúc thị trường, tiếp thị trực tiếp, tiếp thị nội dung."
    ],
    answer: 1,
    explanation: "Promotion bao gồm quảng cáo, PR, khuyến mãi và bán hàng cá nhân trong mô hình Marketing mix."
  },
  {
    question: "Thuật ngữ nào sau đây dùng để chỉ quá trình chia nhỏ thị trường thành các nhóm khách hàng có nhu cầu, đặc điểm hoặc hành vi tương tự?",
    options: [
      "Định vị thị trường",
      "Phân khúc thị trường",
      "Nghiên cứu thị trường",
      "Tiếp thị mục tiêu"
    ],
    answer: 1,
    explanation: "Phân khúc thị trường giúp chia nhỏ khách hàng để tạo các chiến lược phù hợp hơn."
  },
  {
    question: "Giá trị cốt lõi của một thương hiệu là gì?",
    options: [
      "Logo và slogan của thương hiệu.",
      "Lợi ích cảm tính và lý tính mà khách hàng nhận được từ thương hiệu.",
      "Doanh thu và lợi nhuận mà thương hiệu mang lại.",
      "Số lượng sản phẩm bán ra của thương hiệu."
    ],
    answer: 1,
    explanation: "Giá trị cốt lõi là những giá trị cảm nhận từ thương hiệu mà khách hàng ghi nhớ và tin tưởng."
  },
  {
    question: "Kênh phân phối gián tiếp là gì?",
    options: [
      "Kênh mà sản phẩm được bán trực tiếp từ nhà sản xuất đến người tiêu dùng.",
      "Kênh mà sản phẩm được bán thông qua các trung gian như nhà bán buôn, nhà bán lẻ.",
      "Kênh chỉ sử dụng các nền tảng trực tuyến để bán hàng.",
      "Kênh mà khách hàng tự đến lấy sản phẩm tại nhà máy."
    ],
    answer: 1,
    explanation: "Kênh phân phối gián tiếp là khi sản phẩm qua trung gian để đến tay người tiêu dùng."
  },
  {
    question: "Mục tiêu chính của chiến dịch quảng cáo là gì?",
    options: [
      "Tăng giá sản phẩm để tăng lợi nhuận.",
      "Xây dựng nhận diện thương hiệu và thuyết phục khách hàng mua sản phẩm.",
      "Giảm chi phí sản xuất.",
      "Thay đổi toàn bộ quy trình sản xuất."
    ],
    answer: 1,
    explanation: "Quảng cáo nhằm xây dựng hình ảnh thương hiệu và kích thích hành vi mua hàng."
  },
  {
    question: "SEO (Search Engine Optimization) trong Marketing số là gì?",
    options: [
      "Chiến lược quảng cáo trả tiền trên các công cụ tìm kiếm.",
      "Quá trình tối ưu hóa website để đạt thứ hạng cao trên các công cụ tìm kiếm một cách tự nhiên.",
      "Kỹ thuật gửi email hàng loạt đến khách hàng tiềm năng.",
      "Việc chạy các chiến dịch quảng cáo trên mạng xã hội."
    ],
    answer: 1,
    explanation: "SEO giúp website tăng hiển thị tự nhiên, không cần trả tiền cho vị trí."
  },
  {
    question: "CPM (Cost Per Mille/Cost Per Thousand) trong quảng cáo trực tuyến đề cập đến điều gì?",
    options: [
      "Chi phí cho mỗi lượt nhấp chuột vào quảng cáo.",
      "Chi phí cho mỗi nghìn lượt hiển thị quảng cáo.",
      "Chi phí cho mỗi lượt chuyển đổi.",
      "Chi phí cho mỗi lượt tải xuống ứng dụng."
    ],
    answer: 1,
    explanation: "CPM là đơn vị đo lường chi phí theo số lượt hiển thị, thường áp dụng cho quảng cáo thương hiệu."
  },
  {
    question: "Hoạt động nào sau đây thuộc về Public Relations (Quan hệ công chúng)?",
    options: [
      "Chạy quảng cáo trên truyền hình.",
      "Tổ chức sự kiện ra mắt sản phẩm mới với báo chí.",
      "Giảm giá sản phẩm trong một thời gian ngắn.",
      "Gửi tin nhắn SMS quảng cáo cho khách hàng."
    ],
    answer: 1,
    explanation: "Quan hệ công chúng thiên về truyền thông miễn phí, xây dựng hình ảnh tốt đẹp."
  },
  {
    question: "Nghiên cứu thị trường sơ cấp là gì?",
    options: [
      "Thu thập dữ liệu đã có sẵn từ các nguồn bên ngoài.",
      "Thu thập dữ liệu mới trực tiếp từ đối tượng nghiên cứu thông qua phỏng vấn, khảo sát, quan sát.",
      "Phân tích các báo cáo tài chính của đối thủ cạnh tranh.",
      "Tìm kiếm thông tin trên internet."
    ],
    answer: 1,
    explanation: "Nghiên cứu sơ cấp sử dụng dữ liệu gốc được thu thập trực tiếp."
  },
  {
    question: "Ma trận SWOT được sử dụng để phân tích những yếu tố nào?",
    options: [
      "Giá cả, sản phẩm, kênh phân phối, xúc tiến.",
      "Điểm mạnh, điểm yếu, cơ hội, thách thức.",
      "Khách hàng, đối thủ cạnh tranh, nhà cung cấp, sản phẩm thay thế.",
      "Doanh thu, chi phí, lợi nhuận, thị phần."
    ],
    answer: 1,
    explanation: "SWOT là công cụ phân tích chiến lược hiệu quả để đưa ra định hướng phát triển."
  },
  {
    question: "Trong quy trình ra quyết định mua của khách hàng, giai đoạn nào diễn ra sau khi khách hàng nhận thức được nhu cầu?",
    options: [
      "Đánh giá các lựa chọn thay thế.",
      "Tìm kiếm thông tin.",
      "Quyết định mua hàng.",
      "Hành vi sau mua."
    ],
    answer: 1,
    explanation: "Sau khi nhận biết nhu cầu, khách hàng bắt đầu tìm hiểu thông tin."
  },
  {
    question: "Content Marketing là gì?",
    options: [
      "Tạo ra và phân phối nội dung có giá trị, liên quan và nhất quán để thu hút và giữ chân đối tượng mục tiêu.",
      "Chỉ tập trung vào việc tạo ra các bài viết quảng cáo.",
      "Bán hàng trực tiếp thông qua các kênh truyền thông xã hội.",
      "Tối ưu hóa website cho công cụ tìm kiếm."
    ],
    answer: 0,
    explanation: "Content Marketing tạo nội dung hữu ích nhằm thu hút, giữ chân và chuyển đổi khách hàng."
  },
  {
    question: "Mục tiêu của một chiến lược định vị thương hiệu là gì?",
    options: [
      "Tạo ra hình ảnh khác biệt và mong muốn trong tâm trí khách hàng về thương hiệu.",
      "Giảm giá sản phẩm để thu hút nhiều khách hàng hơn.",
      "Thay đổi logo của thương hiệu.",
      "Mở rộng kênh phân phối ra thị trường quốc tế."
    ],
    answer: 0,
    explanation: "Định vị giúp thương hiệu nổi bật trong tâm trí khách hàng giữa vô số lựa chọn."
  },
  {
    question: "Email Marketing được sử dụng với mục đích chính nào?",
    options: [
      "Gửi thư rác hàng loạt.",
      "Xây dựng mối quan hệ với khách hàng, quảng bá sản phẩm/dịch vụ, tăng doanh số.",
      "Cung cấp dịch vụ chăm sóc khách hàng 24/7.",
      "Chỉ để thông báo các chương trình khuyến mãi."
    ],
    answer: 1,
    explanation: "Email marketing hiệu quả giúp duy trì liên lạc và thúc đẩy hành vi mua hàng."
  },
  {
    question: "Brand Equity (Tài sản thương hiệu) là gì?",
    options: [
      "Tổng giá trị tài sản vật chất của một công ty.",
      "Giá trị gia tăng mà một sản phẩm hoặc dịch vụ có được từ tên thương hiệu.",
      "Số lượng cổ phiếu của một công ty trên thị trường chứng khoán.",
      "Chi phí quảng cáo của một thương hiệu."
    ],
    answer: 1,
    explanation: "Tài sản thương hiệu là giá trị mà thương hiệu mang lại vượt trên sản phẩm vật lý."
  },
  {
    question: "Inbound Marketing tập trung vào việc gì?",
    options: [
      "Thu hút khách hàng bằng cách tạo ra nội dung có giá trị và trải nghiệm được cá nhân hóa.",
      "Tiếp cận khách hàng bằng các phương pháp truyền thống như quảng cáo trên TV.",
      "Chỉ sử dụng kênh quảng cáo trả tiền.",
      "Ép buộc khách hàng mua sản phẩm."
    ],
    answer: 0,
    explanation: "Inbound Marketing thu hút khách hàng bằng cách cung cấp giá trị thay vì làm phiền họ."
  },
  {
    question: "ROI (Return On Investment) trong Marketing đo lường điều gì?",
    options: [
      "Tỷ lệ tăng trưởng doanh thu hàng năm.",
      "Hiệu quả của khoản đầu tư Marketing so với lợi nhuận thu được.",
      "Tổng chi phí sản xuất sản phẩm.",
      "Số lượng khách hàng mới mà chiến dịch mang lại."
    ],
    answer: 1,
    explanation: "ROI đo lường hiệu quả sử dụng ngân sách marketing để tối ưu hóa đầu tư."
  },
  {
    question: "CRM (Customer Relationship Management) là hệ thống gì?",
    options: [
      "Hệ thống quản lý tài chính doanh nghiệp.",
      "Hệ thống quản lý quan hệ khách hàng, nhằm tối ưu hóa tương tác và mối quan hệ với khách hàng.",
      "Hệ thống quản lý chuỗi cung ứng.",
      "Hệ thống quản lý nhân sự."
    ],
    answer: 1,
    explanation: "CRM giúp theo dõi hành vi, chăm sóc và tăng sự trung thành của khách hàng."
  },
  {
    question: "Affiliate Marketing (Tiếp thị liên kết) là gì?",
    options: [
      "Hình thức marketing mà một cá nhân hoặc công ty quảng bá sản phẩm của người khác và nhận hoa hồng khi có doanh số.",
      "Hoạt động bán hàng trực tiếp từ nhà sản xuất đến người tiêu dùng.",
      "Quảng cáo trên các kênh truyền hình địa phương.",
      "Tổ chức các sự kiện từ thiện."
    ],
    answer: 0,
    explanation: "Affiliate marketing tận dụng mạng lưới cộng tác viên để mở rộng khả năng bán hàng."
  },
  {
    question: "USP (Unique Selling Proposition) là gì?",
    options: [
      "Giá sản phẩm thấp nhất trên thị trường.",
      "Điểm độc đáo và khác biệt mà sản phẩm hoặc dịch vụ của bạn mang lại so với đối thủ.",
      "Doanh thu hàng năm của công ty.",
      "Số lượng nhân viên của doanh nghiệp."
    ],
    answer: 1,
    explanation: "USP là yếu tố tạo ra lợi thế cạnh tranh và lý do để khách hàng chọn bạn thay vì đối thủ."
  }
];

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;
let quizCompleted = false;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const reviewScreen = document.getElementById('reviewScreen');

const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const reviewBtn = document.getElementById('reviewBtn');
const retakeBtn = document.getElementById('retakeBtn');
const closeReviewBtn = document.getElementById('closeReviewBtn');

const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const currentQuestionSpan = document.getElementById('currentQuestion');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');

// Initialize Quiz
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});

function initializeQuiz() {
    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    reviewBtn.addEventListener('click', showReview);
    retakeBtn.addEventListener('click', retakeQuiz);
    closeReviewBtn.addEventListener('click', closeReview);

    // Initialize user answers array
    userAnswers = new Array(marketingQuestions.length).fill(null);
    
    // Update total questions display
    document.getElementById('totalQuestions').textContent = marketingQuestions.length;
}

function startQuiz() {
    quizStarted = true;
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    loadQuestion();
    updateProgress();
    updateNavigation();
}

function loadQuestion() {
    const question = marketingQuestions[currentQuestionIndex];
    
    // Update question display
    questionNumber.textContent = `Câu hỏi ${currentQuestionIndex + 1}`;
    questionText.textContent = question.question;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer options
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${currentQuestionIndex}`;
        input.value = index;
        input.id = `q${currentQuestionIndex}_a${index}`;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            input.checked = true;
        }
        
        input.addEventListener('change', function() {
            userAnswers[currentQuestionIndex] = parseInt(this.value);
            updateNavigation();
            
            // Add visual feedback
            document.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            answerDiv.classList.add('selected');
        });
        
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = option;
        
        answerDiv.appendChild(input);
        answerDiv.appendChild(label);
        
        // Add selected class if this was the previous answer
        if (userAnswers[currentQuestionIndex] === index) {
            answerDiv.classList.add('selected');
        }
        
        answersContainer.appendChild(answerDiv);
    });
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateProgress();
        updateNavigation();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < marketingQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateProgress();
        updateNavigation();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / marketingQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${marketingQuestions.length}`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

function updateNavigation() {
    // Update previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Update next button
    const hasAnswer = userAnswers[currentQuestionIndex] !== null;
    nextBtn.disabled = !hasAnswer;
    
    // Show/hide submit button
    if (currentQuestionIndex === marketingQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = hasAnswer ? 'block' : 'none';
    } else {
        nextBtn.style.display = hasAnswer ? 'block' : 'none';
        submitBtn.style.display = 'none';
    }
}

function submitQuiz() {
    // Check if all questions are answered
    const unansweredCount = userAnswers.filter(answer => answer === null).length;
    
    if (unansweredCount > 0) {
        if (!confirm(`Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có muốn nộp bài không?`)) {
            return;
        }
    }
    
    quizCompleted = true;
    calculateAndShowResults();
}

function calculateAndShowResults() {
    let correctAnswers = 0;
    
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === marketingQuestions[index].answer) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / marketingQuestions.length) * 100);
    
    // Hide quiz screen and show results
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // Update result display
    document.getElementById('scoreNumber').textContent = correctAnswers;
    
    // Determine result icon and message
    let resultIcon, resultTitle, resultMessage;
    
    if (percentage >= 90) {
        resultIcon = '🏆';
        resultTitle = 'Xuất sắc!';
        resultMessage = 'Bạn có kiến thức Marketing rất vững vàng! Hãy tiếp tục phát huy và học hỏi thêm.';
    } else if (percentage >= 70) {
        resultIcon = '🎉';
        resultTitle = 'Rất tốt!';
        resultMessage = 'Bạn có nền tảng kiến thức Marketing khá tốt. Hãy ôn luyện thêm những phần còn yếu.';
    } else if (percentage >= 50) {
        resultIcon = '👍';
        resultTitle = 'Khá ổn!';
        resultMessage = 'Bạn đã nắm được cơ bản về Marketing. Cần học thêm để nâng cao kiến thức.';
    } else {
        resultIcon = '📚';
        resultTitle = 'Cần cố gắng thêm!';
        resultMessage = 'Hãy dành thời gian học tập và ôn luyện thêm về các kiến thức Marketing cơ bản.';
    }
    
    document.getElementById('resultIcon').textContent = resultIcon;
    document.getElementById('resultTitle').textContent = resultTitle;
    document.getElementById('resultMessage').textContent = resultMessage;
    
    // Animate score display
    animateScore(correctAnswers);
}

function animateScore(finalScore) {
    const scoreElement = document.getElementById('scoreNumber');
    let currentScore = 0;
    const increment = finalScore / 20;
    
    const animation = setInterval(() => {
        currentScore += increment;
        if (currentScore >= finalScore) {
            currentScore = finalScore;
            clearInterval(animation);
        }
        scoreElement.textContent = Math.floor(currentScore);
    }, 50);
}

function showReview() {
    resultScreen.style.display = 'none';
    reviewScreen.style.display = 'block';
    
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';
    
    marketingQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer;
        const isCorrect = userAnswer === correctAnswer;
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <div class="question-header">
                    <span class="question-num">Câu ${index + 1}</span>
                    <span class="result-badge ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </span>
                </div>
                <div class="question-content">${question.question}</div>
            </div>
            
            <div class="review-answers">
                ${question.options.map((option, optIndex) => {
                    let className = 'review-option';
                    if (optIndex === correctAnswer) {
                        className += ' correct-answer';
                    }
                    if (optIndex === userAnswer && userAnswer !== correctAnswer) {
                        className += ' wrong-answer';
                    }
                    if (optIndex === userAnswer) {
                        className += ' user-choice';
                    }
                    
                    return `<div class="${className}">
                        <span class="option-letter">${String.fromCharCode(65 + optIndex)}</span>
                        <span class="option-text">${option}</span>
                        ${optIndex === correctAnswer ? '<span class="check-mark">✓</span>' : ''}
                        ${optIndex === userAnswer && userAnswer !== correctAnswer ? '<span class="x-mark">✗</span>' : ''}
                    </div>`;
                }).join('')}
            </div>
            
            <div class="explanation">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
        
        reviewContent.appendChild(reviewItem);
    });
}

function closeReview() {
    reviewScreen.style.display = 'none';
    resultScreen.style.display = 'block';
}

function retakeQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = new Array(marketingQuestions.length).fill(null);
    quizStarted = false;
    quizCompleted = false;
    
    // Hide result screen and show start screen
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    
    // Reset progress
    progressFill.style.width = '0%';
    currentQuestionSpan.textContent = '0';
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (!quizStarted || quizCompleted) return;
    
    switch(event.key) {
        case 'ArrowLeft':
            if (!prevBtn.disabled) previousQuestion();
            break;
        case 'ArrowRight':
            if (!nextBtn.disabled) nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(event.key) - 1;
            const radioButton = document.querySelector(`input[name="question${currentQuestionIndex}"][value="${optionIndex}"]`);
            if (radioButton) {
                radioButton.checked = true;
                radioButton.dispatchEvent(new Event('change'));
            }
            break;
        case 'Enter':
            if (currentQuestionIndex === marketingQuestions.length - 1 && !submitBtn.disabled) {
                submitQuiz();
            } else if (!nextBtn.disabled) {
                nextQuestion();
            }
            break;
    }
});

// Add smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Call smooth scroll when changing questions
const originalLoadQuestion = loadQuestion;
loadQuestion = function() {
    originalLoadQuestion();
    smoothScrollToTop();
};