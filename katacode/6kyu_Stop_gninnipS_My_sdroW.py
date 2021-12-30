
NUMBER = 5


def spin(word: str):
    listChar: list = []
    for char in word:
        listChar.insert(0, char)
    return ''.join(listChar)


def spin_words(sentence: str):
    list_words = sentence.split()

    SIZE_LIST_WORDS = len(list_words)

    for index in range(0, SIZE_LIST_WORDS):
        SIZE_WORD = len(list_words[index])
        if SIZE_WORD >= NUMBER:
            list_words[index] = spin(list_words[index])

    return ' '.join(list_words)


def main():
    print(spin_words("This sentence is a sentence"))
    print(spin_words("to"))
    print(spin_words("CodeWars"))


if __name__ == "__main__":
    main()
