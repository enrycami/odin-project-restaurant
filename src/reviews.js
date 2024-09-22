// create reviews page

const createReviewPage = () => {
    const content = document.querySelector('#content');
    const reviewPageContent = document.createElement('div');
    content.appendChild(reviewPageContent);

    const reviewOne = document.createElement('div');
    const reviewOneBlock = document.createElement('blockquote');
    const reviewOneText = document.createElement('p');
    reviewOneText.textContent = "This restaurant was so generically good, I'll definitely be back! 5/5";
    reviewOneBlock.appendChild(reviewOneText);
    reviewOne.appendChild(reviewOneBlock);
    const reviewOneAuthor = document.createElement('p');
    reviewOneAuthor.textContent = 'Generic John';
    reviewOne.appendChild(reviewOneAuthor);
    reviewPageContent.appendChild(reviewOne);

    const reviewTwo = document.createElement('div');
    const reviewTwoBlock = document.createElement('blockquote');
    const reviewTwoText = document.createElement('p');
    reviewTwoText.textContent = "This restaurant was so generically good, I'll definitely be back! 5/5";
    reviewTwoBlock.appendChild(reviewTwoText);
    reviewTwo.appendChild(reviewTwoBlock);
    const reviewTwoAuthor = document.createElement('p');
    reviewTwoAuthor.textContent = 'Generic John';
    reviewTwo.appendChild(reviewTwoAuthor);
    reviewPageContent.appendChild(reviewTwo);

    const reviewThree = document.createElement('div');
    const reviewThreeBlock = document.createElement('blockquote');
    const reviewThreeText = document.createElement('p');
    reviewThreeText.textContent = "This restaurant was so generically good, I'll definitely be back! 5/5";
    reviewThreeBlock.appendChild(reviewThreeText);
    reviewThree.appendChild(reviewThreeBlock);
    const reviewThreeAuthor = document.createElement('p');
    reviewThreeAuthor.textContent = 'Generic John';
    reviewThree.appendChild(reviewThreeAuthor);
    reviewPageContent.appendChild(reviewThree);

}

export default createReviewPage;