// IT Quiz Data
const itQuestions = [
    {
        question: "Thiết bị nào sau đây được coi là bộ não của máy tính, thực hiện các phép tính và xử lý dữ liệu?",
        options: [
            "RAM (Random Access Memory)",
            "CPU (Central Processing Unit)",
            "HDD (Hard Disk Drive)",
            "GPU (Graphics Processing Unit)"
        ],
        answer: 1,
        explanation: "CPU (Central Processing Unit) là bộ xử lý trung tâm, được coi là bộ não của máy tính vì nó thực hiện tất cả các phép tính và xử lý dữ liệu."
    },
    {
        question: "RAM là viết tắt của gì và chức năng chính của nó là gì?",
        options: [
            "Read Access Memory, lưu trữ dữ liệu vĩnh viễn.",
            "Random Access Memory, lưu trữ dữ liệu tạm thời để CPU truy cập nhanh.",
            "Read Only Memory, lưu trữ chương trình khởi động của máy tính.",
            "Remote Access Module, kết nối máy tính từ xa."
        ],
        answer: 1,
        explanation: "RAM (Random Access Memory) là bộ nhớ truy cập ngẫu nhiên, lưu trữ dữ liệu tạm thời để CPU có thể truy cập nhanh chóng trong quá trình xử lý."
    },
    {
        question: "Hệ điều hành (Operating System) là gì?",
        options: [
            "Một phần mềm ứng dụng để soạn thảo văn bản.",
            "Một tập hợp các chương trình quản lý tài nguyên phần cứng và phần mềm của máy tính, cung cấp giao diện cho người dùng.",
            "Một thiết bị ngoại vi để in ấn.",
            "Một ngôn ngữ lập trình."
        ],
        answer: 1,
        explanation: "Hệ điều hành là phần mềm hệ thống quản lý tài nguyên phần cứng và phần mềm, đồng thời cung cấp giao diện để người dùng tương tác với máy tính."
    },
    {
        question: "Đơn vị đo lường dung lượng lưu trữ nào là lớn nhất trong các lựa chọn sau?",
        options: [
            "Kilobyte (KB)",
            "Megabyte (MB)",
            "Gigabyte (GB)",
            "Terabyte (TB)"
        ],
        answer: 3,
        explanation: "Thứ tự từ nhỏ đến lớn: KB < MB < GB < TB. 1 TB = 1024 GB = 1,048,576 MB."
    },
    {
        question: "Thiết bị nào sau đây dùng để kết nối nhiều máy tính trong một mạng cục bộ (LAN)?",
        options: [
            "Modem",
            "Router/Switch",
            "Webcam",
            "Microphone"
        ],
        answer: 1,
        explanation: "Router và Switch là các thiết bị mạng dùng để kết nối nhiều máy tính trong mạng LAN. Switch kết nối trong cùng mạng con, Router kết nối giữa các mạng khác nhau."
    },
    {
        question: "Địa chỉ IP (Internet Protocol) có chức năng gì?",
        options: [
            "Xác định tên miền của một trang web.",
            "Định danh duy nhất một thiết bị trên mạng.",
            "Mã hóa dữ liệu khi truyền qua internet.",
            "Quản lý tài khoản người dùng trên máy tính."
        ],
        answer: 1,
        explanation: "Địa chỉ IP là một định danh số duy nhất được gán cho mỗi thiết bị kết nối internet để có thể giao tiếp với nhau trên mạng."
    },
    {
        question: "Phần mềm độc hại (Malware) được thiết kế để làm gì?",
        options: [
            "Tăng tốc độ máy tính.",
            "Gây hại cho hệ thống máy tính, đánh cắp thông tin hoặc kiểm soát máy tính.",
            "Tối ưu hóa hiệu suất mạng.",
            "Sao lưu dữ liệu tự động."
        ],
        answer: 1,
        explanation: "Malware (Malicious Software) là phần mềm độc hại được tạo ra với mục đích gây hại, đánh cắp thông tin, hoặc kiểm soát trái phép hệ thống máy tính."
    },
    {
        question: "Đâu KHÔNG phải là một cổng giao tiếp phổ biến trên máy tính?",
        options: [
            "USB",
            "HDMI",
            "VGA",
            "CPU"
        ],
        answer: 3,
        explanation: "CPU là bộ xử lý trung tâm, không phải là cổng giao tiếp. USB, HDMI, VGA đều là các cổng kết nối phổ biến trên máy tính."
    },
    {
        question: "Chức năng chính của BIOS (Basic Input/Output System) là gì?",
        options: [
            "Duyệt web.",
            "Quản lý các thiết bị phần cứng cơ bản và khởi động hệ điều hành khi máy tính bật.",
            "Chỉnh sửa hình ảnh.",
            "Soạn thảo văn bản."
        ],
        answer: 1,
        explanation: "BIOS là firmware cơ bản được lưu trữ trong chip ROM, có nhiệm vụ kiểm tra phần cứng và khởi động hệ điều hành khi máy tính được bật."
    },
    {
        question: "Mạng WAN (Wide Area Network) khác với mạng LAN (Local Area Network) ở điểm nào?",
        options: [
            "WAN chỉ kết nối các thiết bị trong cùng một phòng.",
            "WAN kết nối các mạng LAN lại với nhau trên một phạm vi địa lý rộng lớn (quốc gia, toàn cầu).",
            "WAN không yêu cầu kết nối internet.",
            "WAN chỉ dành cho các thiết bị di động."
        ],
        answer: 1,
        explanation: "WAN (Wide Area Network) là mạng diện rộng kết nối các mạng LAN trên phạm vi địa lý lớn, trong khi LAN chỉ kết nối các thiết bị trong phạm vi hẹp như một tòa nhà."
    },
    {
        question: "Trong ngôn ngữ lập trình C, từ khóa nào được sử dụng để khai báo một biến có kiểu số nguyên?",
        options: [
            "float",
            "char",
            "int",
            "double"
        ],
        answer: 2,
        explanation: "Từ khóa 'int' trong C được sử dụng để khai báo biến kiểu số nguyên (integer). 'float' và 'double' dành cho số thực, 'char' dành cho ký tự."
    },
    {
        question: "Câu lệnh nào sau đây được sử dụng để hiển thị một chuỗi ra màn hình trong C?",
        options: [
            "cout << 'Hello';",
            "printf('Hello');",
            "System.out.println('Hello');",
            "Console.WriteLine('Hello');"
        ],
        answer: 1,
        explanation: "printf() là hàm trong C để in chuỗi ra màn hình. cout<< là C++, System.out.println là Java, Console.WriteLine là C#."
    },
    {
        question: "Trong C#, khái niệm 'Class' (Lớp) là gì?",
        options: [
            "Một kiểu dữ liệu cơ bản như số nguyên hoặc ký tự.",
            "Một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng, định nghĩa các thuộc tính và phương thức.",
            "Một hàm chỉ thực hiện một tác vụ duy nhất.",
            "Một vòng lặp để lặp lại một khối mã."
        ],
        answer: 1,
        explanation: "Class (Lớp) trong lập trình hướng đối tượng là một template/blueprint định nghĩa cấu trúc và hành vi của các object sẽ được tạo ra từ nó."
    },
    {
        question: "Sự khác biệt cơ bản giữa == và .Equals() trong C# khi so sánh đối tượng là gì?",
        options: [
            "== so sánh giá trị, .Equals() so sánh tham chiếu.",
            "== so sánh tham chiếu (mặc định), .Equals() so sánh giá trị (có thể ghi đè).",
            "Cả hai đều so sánh giá trị.",
            "Cả hai đều so sánh tham chiếu."
        ],
        answer: 1,
        explanation: "Trong C#, toán tử == mặc định so sánh reference, trong khi .Equals() có thể được override để so sánh giá trị thực tế của đối tượng."
    },
    {
        question: "Trong C#, phương thức nào được gọi tự động khi một đối tượng của một lớp được tạo ra?",
        options: [
            "Destructor",
            "Static method",
            "Constructor",
            "Abstract method"
        ],
        answer: 2,
        explanation: "Constructor là phương thức đặc biệt được gọi tự động khi tạo một instance mới của class, dùng để khởi tạo giá trị ban đầu cho object."
    },
    {
        question: "Vòng lặp for trong C# được sử dụng khi nào?",
        options: [
            "Khi bạn muốn lặp lại một khối mã vô hạn.",
            "Khi bạn biết chính xác số lần lặp.",
            "Khi bạn muốn lặp lại cho đến khi một điều kiện sai.",
            "Khi bạn muốn lặp qua các phần tử của một bộ sưu tập."
        ],
        answer: 1,
        explanation: "Vòng lặp for thích hợp khi biết trước số lần lặp cần thực hiện. Các trường hợp khác nên dùng while, do-while hoặc foreach."
    },
    {
        question: "Ngôn ngữ đánh dấu nào được sử dụng để cấu trúc nội dung của một trang web?",
        options: [
            "CSS (Cascading Style Sheets)",
            "JavaScript",
            "HTML (HyperText Markup Language)",
            "PHP"
        ],
        answer: 2,
        explanation: "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chuẩn để tạo cấu trúc và nội dung của trang web."
    },
    {
        question: "Để định dạng giao diện (màu sắc, font chữ, bố cục) của một trang web, người ta sử dụng ngôn ngữ nào?",
        options: [
            "HTML",
            "JavaScript",
            "CSS",
            "SQL"
        ],
        answer: 2,
        explanation: "CSS (Cascading Style Sheets) là ngôn ngữ stylesheet dùng để định dạng giao diện, màu sắc, font chữ và bố cục của trang web."
    },
    {
        question: "Ngôn ngữ lập trình nào thường được sử dụng để tạo ra các tương tác động trên phía client (trình duyệt) của trang web?",
        options: [
            "Python",
            "Java",
            "JavaScript",
            "C#"
        ],
        answer: 2,
        explanation: "JavaScript là ngôn ngữ lập trình chạy trên trình duyệt (client-side) để tạo ra các tương tác động và xử lý sự kiện trên trang web."
    },
    {
        question: "Khái niệm 'Responsive Web Design' (Thiết kế web đáp ứng) đề cập đến điều gì?",
        options: [
            "Thiết kế website chỉ hiển thị tốt trên máy tính để bàn.",
            "Thiết kế website tự động điều chỉnh bố cục và nội dung để hiển thị phù hợp trên nhiều kích thước màn hình khác nhau (máy tính, tablet, điện thoại).",
            "Thiết kế website chỉ tập trung vào tốc độ tải trang.",
            "Thiết kế website với nhiều hình ảnh động."
        ],
        answer: 1,
        explanation: "Responsive Web Design là phương pháp thiết kế web cho phép trang web tự động thích ứng và hiển thị tối ưu trên mọi kích thước màn hình và thiết bị."
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
    userAnswers = new Array(itQuestions.length).fill(null);
    
    // Update total questions display
    document.getElementById('totalQuestions').textContent = itQuestions.length;
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
    const question = itQuestions[currentQuestionIndex];
    
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
    if (currentQuestionIndex < itQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateProgress();
        updateNavigation();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / itQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${itQuestions.length}`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

function updateNavigation() {
    // Update previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Update next button
    const hasAnswer = userAnswers[currentQuestionIndex] !== null;
    nextBtn.disabled = !hasAnswer;
    
    // Show/hide submit button
    if (currentQuestionIndex === itQuestions.length - 1) {
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
        if (userAnswer === itQuestions[index].answer) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / itQuestions.length) * 100);
    
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
        resultMessage = 'Bạn có kiến thức IT rất vững vàng! Hãy tiếp tục phát huy và học hỏi thêm.';
    } else if (percentage >= 70) {
        resultIcon = '🎉';
        resultTitle = 'Rất tốt!';
        resultMessage = 'Bạn có nền tảng kiến thức IT khá tốt. Hãy ôn luyện thêm những phần còn yếu.';
    } else if (percentage >= 50) {
        resultIcon = '👍';
        resultTitle = 'Khá ổn!';
        resultMessage = 'Bạn đã nắm được cơ bản về IT. Cần học thêm để nâng cao kiến thức.';
    } else {
        resultIcon = '📚';
        resultTitle = 'Cần cố gắng thêm!';
        resultMessage = 'Hãy dành thời gian học tập và ôn luyện thêm về các kiến thức IT cơ bản.';
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
    
    itQuestions.forEach((question, index) => {
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
    userAnswers = new Array(itQuestions.length).fill(null);
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
            if (currentQuestionIndex === itQuestions.length - 1 && !submitBtn.disabled) {
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