import {_saveQuestionAnswer, _saveQuestion } from "./_DATA";

describe('_saveQuestion', () => {
  it('returns saved question with all expected fields populated when correctly formatted data is passed', async() => {
    const data = {
      author: 'some user',
      optionOneText: 'option 1',
      optionTwoText: 'option 2',
    }

    const result = await _saveQuestion(data);
    expect(result['id']).not.toBeNull();
    expect(result['timestamp']).not.toBeNull();
    expect(result['author']).toEqual('some user');
    expect(result['optionOne']['votes']).toEqual([]);
    expect(result['optionOne']['text']).toEqual('option 1');
    expect(result['optionTwo']['votes']).toEqual([]);
    expect(result['optionTwo']['text']).toEqual('option 2');
  })

  it('will return an error if bad data is passed', async() => {
    const badData = {
      sillyField: 'silly string'
    }

    await expect(_saveQuestion(badData)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });
    }
)

describe('_saveQuestionAnswer', () => {
  it('returns true when correctly formatted data is passed', async() => {
    jest.setTimeout(6000)

    const data = {
      authedUser: 'sarahedo',
      qid: 'loxhs1bqm25b708cmbf3g',
      answer: 'optionTwo',
    }

    const result = await _saveQuestionAnswer(data);
    expect(result).toEqual(true)
  })

  it('will return an error if bad data is passed', async() => {
    const badData = {
      sillyField: 'silly string'
    }

    await expect(_saveQuestionAnswer(badData)).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
})
