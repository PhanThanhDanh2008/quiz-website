// Design Quiz Data
const designQuestions = [
    {
        question: "Độ phân giải của hình ảnh (Resolution) thường được đo bằng đơn vị nào?",
        options: [
            "cm (centimeters)",
            "dpi (dots per inch) hoặc ppi (pixels per inch)",
            "Hz (Hertz)",
            "dB (decibels)"
        ],
        answer: 1,
        explanation: "Độ phân giải của hình ảnh được đo bằng dpi (dots per inch) hoặc ppi (pixels per inch), thể hiện số lượng điểm ảnh trên mỗi inch, quyết định chất lượng hình ảnh."
    },
    {
        question: "Hệ màu RGB thường được sử dụng cho mục đích nào?",
        options: [
            "In ấn (báo, tạp chí, brochure)",
            "Hiển thị trên màn hình (web, video, ứng dụng)",
            "Thiết kế bao bì sản phẩm",
            "Thiết kế logo cho các công ty in ấn"
        ],
        answer: 1,
        explanation: "Hệ màu RGB (Red, Green, Blue) là hệ màu cộng, được sử dụng cho hiển thị trên màn hình như web, video, và ứng dụng vì nó phù hợp với ánh sáng kỹ thuật số."
    },
    {
        question: "Trong thiết kế đồ họa, 'Typography' (Kiểu chữ) đề cập đến điều gì?",
        options: [
            "Cách sắp xếp các hình ảnh và biểu tượng",
            "Nghệ thuật và kỹ thuật sắp xếp kiểu chữ để làm cho ngôn ngữ viết dễ đọc, dễ hiểu và hấp dẫn về mặt hình ảnh",
            "Lựa chọn màu sắc cho dự án thiết kế",
            "Quy trình xuất file thiết kế ra các định dạng khác nhau"
        ],
        answer: 1,
        explanation: "Typography là nghệ thuật sắp xếp chữ để đảm bảo tính thẩm mỹ, dễ đọc, và truyền tải thông điệp hiệu quả trong thiết kế đồ họa."
    },
    {
        question: "Phần mềm nào sau đây thường được sử dụng để chỉnh sửa ảnh raster (ảnh bitmap)?",
        options: [
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Adobe InDesign",
            "CorelDRAW"
        ],
        answer: 1,
        explanation: "Adobe Photoshop là phần mềm chuyên dụng để chỉnh sửa ảnh raster (bitmap), phù hợp với việc xử lý ảnh pixel như chỉnh màu, retouch, và hiệu ứng."
    },
    {
        question: "Nguyên tắc 'Balance' (Cân bằng) trong thiết kế đồ họa nghĩa là gì?",
        options: [
            "Sử dụng một màu sắc duy nhất cho toàn bộ thiết kế",
            "Sự phân bố đều các yếu tố hình ảnh, văn bản và không gian trắng để tạo cảm giác ổn định và hài hòa",
            "Đặt tất cả các yếu tố thiết kế ở trung tâm",
            "Sử dụng nhiều kiểu chữ khác nhau trong cùng một thiết kế"
        ],
        answer: 1,
        explanation: "Cân bằng (Balance) là nguyên tắc thiết kế đảm bảo các yếu tố như hình ảnh, văn bản, và không gian trắng được phân bố hài hòa để tạo sự ổn định và thẩm mỹ."
    },
    {
        question: "Vector Graphics (Đồ họa Vector) có đặc điểm nổi bật nào?",
        options: [
            "Khi phóng to sẽ bị vỡ hình, răng cưa",
            "Được tạo thành từ các pixel",
            "Không bị giảm chất lượng khi thay đổi kích thước",
            "Phù hợp cho việc chỉnh sửa ảnh chụp"
        ],
        answer: 2,
        explanation: "Đồ họa Vector sử dụng các đường dẫn toán học, cho phép phóng to/thu nhỏ mà không mất chất lượng, lý tưởng cho logo và biểu tượng."
    },
    {
        question: "Khoảng không gian trống xung quanh và giữa các yếu tố thiết kế được gọi là gì?",
        options: [
            "Texture",
            "Negative Space (Không gian âm) / White Space (Không gian trắng)",
            "Gradient",
            "Pattern"
        ],
        answer: 1,
        explanation: "Negative Space hoặc White Space là khoảng trống xung quanh các yếu tố thiết kế, giúp tăng tính rõ ràng và thẩm mỹ cho bố cục."
    },
    {
        question: "Định dạng file nào sau đây KHÔNG phải là định dạng file hình ảnh phổ biến?",
        options: [
            "JPG/JPEG",
            "PNG",
            "GIF",
            "DOCX"
        ],
        answer: 3,
        explanation: "DOCX là định dạng tài liệu văn bản của Microsoft Word, không phải định dạng hình ảnh. JPG, PNG, và GIF là các định dạng hình ảnh phổ biến."
    },
    {
        question: "Trong thiết kế in ấn, 'Bleed' (Tràn lề) là gì?",
        options: [
            "Khoảng cách an toàn từ mép giấy đến nội dung",
            "Vùng hình ảnh hoặc màu sắc mở rộng ra ngoài đường cắt thực tế của trang",
            "Kích thước cuối cùng của sản phẩm in sau khi cắt",
            "Vị trí đặt số trang"
        ],
        answer: 1,
        explanation: "Bleed là vùng mở rộng ngoài đường cắt thực tế, đảm bảo không có khoảng trắng không mong muốn sau khi cắt sản phẩm in."
    },
    {
        question: "Công cụ Pen Tool trong Adobe Illustrator và Photoshop được sử dụng để làm gì?",
        options: [
            "Tô màu nhanh cho các đối tượng",
            "Tạo các đường cong và đường thẳng sắc nét, tạo vùng chọn phức tạp",
            "Chỉnh sửa độ sáng tối của hình ảnh",
            "Xóa bỏ các đối tượng không mong muốn"
        ],
        answer: 1,
        explanation: "Pen Tool được sử dụng để tạo các đường path chính xác, giúp vẽ đường cong, đường thẳng, và tạo vùng chọn phức tạp trong thiết kế."
    },
    {
        question: "Hệ màu CMYK được sử dụng chủ yếu cho mục đích nào?",
        options: [
            "Thiết kế website và ứng dụng di động",
            "Hiển thị trên các thiết bị điện tử",
            "In ấn (báo, tạp chí, poster)",
            "Chỉnh sửa video"
        ],
        answer: 2,
        explanation: "Hệ màu CMYK (Cyan, Magenta, Yellow, Black) là hệ màu trừ, được sử dụng trong in ấn để tái tạo màu sắc chính xác trên giấy."
    },
    {
        question: "Khi thiết kế một logo, nguyên tắc nào sau đây là quan trọng nhất để đảm bảo tính ứng dụng?",
        options: [
            "Sử dụng càng nhiều màu sắc càng tốt",
            "Thiết kế phức tạp và nhiều chi tiết",
            "Đơn giản, dễ nhớ, dễ nhận biết và có thể sử dụng trên nhiều nền tảng/kích thước khác nhau",
            "Luôn sử dụng hình ảnh thực tế"
        ],
        answer: 2,
        explanation: "Logo cần đơn giản, dễ nhận diện, và linh hoạt để sử dụng trên nhiều nền tảng và kích thước, đảm bảo tính ứng dụng và hiệu quả thương hiệu."
    },
    {
        question: "'Kerning' và 'Tracking' trong Typography đề cập đến điều gì?",
        options: [
            "Màu sắc và kích thước của chữ",
            "Khoảng cách giữa các chữ cái riêng lẻ và khoảng cách giữa các khối chữ",
            "Kiểu chữ in hoa và in thường",
            "Độ đậm nhạt của chữ"
        ],
        answer: 1,
        explanation: "Kerning điều chỉnh khoảng cách giữa từng cặp chữ cái, trong khi Tracking điều chỉnh khoảng cách đồng đều giữa các khối chữ."
    },
    {
        question: "Phần mềm nào sau đây được xem là tiêu chuẩn trong ngành để thiết kế layout cho tạp chí, sách, brochure?",
        options: [
            "Adobe Premiere Pro",
            "Adobe After Effects",
            "Adobe InDesign",
            "SketchUp"
        ],
        answer: 2,
        explanation: "Adobe InDesign là phần mềm tiêu chuẩn cho thiết kế layout in ấn như tạp chí, sách, và brochure nhờ khả năng quản lý bố cục chuyên nghiệp."
    },
    {
        question: "'Mockup' trong thiết kế đồ họa là gì?",
        options: [
            "Một bản vẽ phác thảo sơ bộ bằng tay",
            "Một mô hình trực quan hoặc mô phỏng của thiết kế cuối cùng, thường được đặt trong ngữ cảnh thực tế",
            "File thiết kế gốc với tất cả các layer",
            "Một danh sách các yêu cầu của khách hàng"
        ],
        answer: 1,
        explanation: "Mockup là mô hình trực quan thể hiện thiết kế trong bối cảnh thực tế (như logo trên danh thiếp), giúp khách hàng hình dung sản phẩm cuối."
    },
    {
        question: "Nguyên tắc 'Contrast' (Tương phản) trong thiết kế đồ họa giúp tạo ra điều gì?",
        options: [
            "Sự hài hòa và đồng nhất tuyệt đối",
            "Sự khác biệt rõ rệt giữa các yếu tố để thu hút sự chú ý và tạo điểm nhấn",
            "Màu sắc nhạt nhòa và ít nổi bật",
            "Một bố cục nhàm chán"
        ],
        answer: 1,
        explanation: "Tương phản (Contrast) tạo sự khác biệt giữa các yếu tố (màu sắc, kích thước, hình dạng) để thu hút sự chú ý và làm nổi bật thông điệp."
    },
    {
        question: "DPI là viết tắt của gì trong thiết kế đồ họa?",
        options: [
            "Digital Pixel Information",
            "Dots Per Inch",
            "Design Process Interface",
            "Document Page Indicator"
        ],
        answer: 1,
        explanation: "DPI (Dots Per Inch) là đơn vị đo độ phân giải, thể hiện số lượng điểm ảnh trên mỗi inch, thường dùng trong in ấn."
    },
    {
        question: "Định dạng file nào sau đây thường được sử dụng cho ảnh có nền trong suốt?",
        options: [
            "JPG/JPEG",
            "TIFF",
            "PNG",
            "BMP"
        ],
        answer: 2,
        explanation: "PNG hỗ trợ nền trong suốt (transparency), lý tưởng cho logo hoặc hình ảnh cần đặt trên các nền khác nhau."
    },
    {
        question: "Khi thiết kế giao diện người dùng (UI) cho website hoặc ứng dụng, yếu tố nào sau đây là quan trọng nhất để đảm bảo trải nghiệm người dùng tốt?",
        options: [
            "Sử dụng nhiều hiệu ứng động",
            "Đảm bảo tính dễ sử dụng, trực quan và dễ hiểu",
            "Màu sắc rực rỡ nhất có thể",
            "Font chữ độc đáo và khó đọc"
        ],
        answer: 1,
        explanation: "Tính dễ sử dụng, trực quan và dễ hiểu là yếu tố quan trọng nhất trong thiết kế UI, đảm bảo trải nghiệm người dùng mượt mà và hiệu quả."
    },
    {
        question: "'Rule of Thirds' (Quy tắc một phần ba) trong bố cục hình ảnh là gì?",
        options: [
            "Chia khung hình thành hai nửa bằng nhau",
            "Chia khung hình thành ba phần bằng nhau theo chiều ngang và chiều dọc, đặt các đối tượng quan trọng tại các giao điểm",
            "Đặt tất cả các đối tượng ở giữa khung hình",
            "Chỉ sử dụng ba màu sắc trong một bức ảnh"
        ],
        answer: 1,
        explanation: "Quy tắc một phần ba chia khung hình thành lưới 3x3, đặt các yếu tố quan trọng tại giao điểm để tạo bố cục cân bằng và thu hút."
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
    userAnswers = new Array(designQuestions.length).fill(null);
    
    // Update total questions display
    document.getElementById('totalQuestions').textContent = designQuestions.length;
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
    const question = designQuestions[currentQuestionIndex];
    
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
    if (currentQuestionIndex < designQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateProgress();
        updateNavigation();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / designQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${designQuestions.length}`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

function updateNavigation() {
    // Update previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Update next button
    const hasAnswer = userAnswers[currentQuestionIndex] !== null;
    nextBtn.disabled = !hasAnswer;
    
    // Show/hide submit button
    if (currentQuestionIndex === designQuestions.length - 1) {
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
        if (userAnswer === designQuestions[index].answer) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / designQuestions.length) * 100);
    
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
        resultMessage = 'Bạn có kiến thức thiết kế đồ họa tuyệt vời! Hãy tiếp tục sáng tạo và phát triển kỹ năng.';
    } else if (percentage >= 70) {
        resultIcon = '🎉';
        resultTitle = 'Rất tốt!';
        resultMessage = 'Bạn có nền tảng thiết kế vững chắc. Hãy luyện tập thêm để hoàn thiện kỹ năng.';
    } else if (percentage >= 50) {
        resultIcon = '👍';
        resultTitle = 'Khá ổn!';
        resultMessage = 'Bạn đã nắm được các khái niệm cơ bản về thiết kế. Cần học thêm để nâng cao trình độ.';
    } else {
        resultIcon = '📚';
        resultTitle = 'Cần cố gắng thêm!';
        resultMessage = 'Hãy dành thời gian học tập và thực hành thêm về các nguyên tắc thiết kế đồ họa.';
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
    
    designQuestions.forEach((question, index) => {
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
    userAnswers = new Array(designQuestions.length).fill(null);
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
            if (currentQuestionIndex === designQuestions.length - 1 && !submitBtn.disabled) {
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