
#include <iostream>
#include <vector>

std::vector<int> evenNumbers(std::vector<int> arr, int n)
{
    std::vector<int> result = {};

    for (int i = arr.size() - 1; i >= 0 && result.size() < n; i--)
    {
        if (arr[i] % 2 == 0)
        {
            result.insert(result.begin(), arr[i]);
        }
    }

    return result;
}

int main(int argc, char const *argv[])
{
    std::vector<int> plok{1, 2, 3, 4, 5, 6, 7, 8, 9};

    std::vector<int> result = evenNumbers(plok, 3);

    for (auto i : result)
        std::cout << i << std::endl;

    return 0;
}
